import { randomBytes } from "crypto";
import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { NotFoundException } from "../domain/exceptions/not-found.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { FeatureRepositoryImpl } from "../infrastructure/repositoriesImpl/feature.repository-implement";
import { SubscriptionInstanceRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-instance.repository-implement";
import { createFamilyDTO } from "../presentations/dtos/family/create.dto";
import { IFamily } from "../types/family.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";
import { JoinFamilyDTO } from "../presentations/dtos/family/join-family.dto";

const FamilyRepo = new FamilyRepositoryImpl();
const InstanceRepo = new SubscriptionInstanceRepositoryImpl();
const featuresRepo = new FeatureRepositoryImpl();
export const FamilyService = {
  create: async (data: createFamilyDTO): Promise<IFamily> => {
    const familyData = await createAndValidateDto(createFamilyDTO, data);
    if (familyData.members.length > 2) {
      throw new BadRequestException("Family can have only 2 members");
    }
    let uniqueCode: string = "";
    let isUnique = false;

    while (!isUnique) {
      uniqueCode = randomBytes(4).toString("hex").toUpperCase();
      const existingFamily = await FamilyRepo.checkUniqueNumberCode(uniqueCode);
      if (!existingFamily) {
        isUnique = true;
      }
    }

    familyData.codeNumber = uniqueCode;
    const newFamily = await FamilyRepo.create(familyData);
    return newFamily;
  },
  addMember: async (familyId: string, listMember: string[]) => {
    const familyExits = await FamilyRepo.findFamilyById(familyId);
    if (!familyExits) {
      throw new NotFoundException("Family not found");
    }
    const converMembersToString = familyExits.members?.map((member) =>
      member.toString()
    );
    const newListMember = listMember.filter(
      (member) => !converMembersToString?.includes(member)
    );
    const addNewMembers = await FamilyRepo.addMembers(familyId, newListMember);
    return addNewMembers;
  },
  removeMembers: async (familyId: string, listMember: string[]) => {
    const familyExits = await FamilyRepo.findFamilyById(familyId);
    if (!familyExits) {
      throw new NotFoundException("Family not found");
    }
    const converMembersToString = familyExits.members?.map((member) =>
      member.toString()
    );
    const newListMember = listMember.filter((member) =>
      converMembersToString?.includes(member)
    );
    const removeMembers = await FamilyRepo.removeMembers(
      familyId,
      newListMember
    );
    return removeMembers;
  },

  featuresFamily: async (familyId: string) => {
    const instanceSubcription = await InstanceRepo.findByFamilyId(familyId);
    if (!instanceSubcription) {
      throw new NotFoundException(
        "Subscription instance not found for the given family ID"
      );
    }
    const convertFeaturesToString = instanceSubcription?.usedFeatures.map(
      (feature) => feature.toString()
    );
    const features = await Promise.all(
      convertFeaturesToString.map((featureId) =>
        featuresRepo.findById(featureId)
      )
    );
    return features.map((item) => ({
      featureName: item?.featureName,
      description: item?.description,
    }));
  },
  getMembersOfFamily: async (familyId: string) => {
    return await FamilyRepo.getMembersFamily(familyId);
  },
  joinFamily: async (userId: string, data: any) => {
    const dataDTO = await createAndValidateDto(JoinFamilyDTO, data);
    const family = await FamilyRepo.checkUniqueNumberCode(dataDTO.codeNumber);
    if (!family) {
      throw new NotFoundException("Mã code không hợp lệ.");
    }
    if ((family.members ?? []).includes(userId)) {
      throw new BadRequestException(
        "Người dùng đã là thành viên của gia đình này."
      );
    }

    family.members = [...(family.members ?? []), userId];
    await family.save();

    return { familyId: family._id };
  },

  getFamilyOfUser: async (userId: string) => {
    const familyOfMember = await FamilyRepo.findFamilyOfMember(userId);
    const familyOfAdmin = await FamilyRepo.findFamilyOfAdmin(userId);
    const combinedFamilies = [...familyOfMember, ...familyOfAdmin];
    const result = combinedFamilies.map(({ _id, name }) => ({ _id, name }));

    return result;
  },
};
