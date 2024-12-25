import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { NotFoundException } from "../domain/exceptions/not-found.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { FeatureRepositoryImpl } from "../infrastructure/repositoriesImpl/feature.repository-implement";
import { SubscriptionInstanceRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-instance.repository-implement";
import { createFamilyDTO } from "../presentations/dtos/family/create.dto";
import { IFamily } from "../types/family.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const FamilyRepo = new FamilyRepositoryImpl();
const InstanceRepo = new SubscriptionInstanceRepositoryImpl();
const featuresRepo = new FeatureRepositoryImpl();
export const FamilyService = {
  create: async (data: createFamilyDTO): Promise<IFamily> => {
    const familyData = await createAndValidateDto(createFamilyDTO, data);
    if (familyData.members.length > 2) {
      throw new BadRequestException("Family can have only 2 members");
    }
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
};
