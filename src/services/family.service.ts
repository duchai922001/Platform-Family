import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { createFamilyDTO } from "../presentations/dtos/family/create.dto";
import { IFamily } from "../types/family.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const FamilyRepository = new FamilyRepositoryImpl();
export const FamilyService = {
  create: async (data: createFamilyDTO): Promise<IFamily> => {
    const familyData = await createAndValidateDto(createFamilyDTO, data);
    if (familyData.members.length > 2) {
      throw new BadRequestException("Family can have only 2 members");
    }
    const newFamily = await FamilyRepository.create(familyData);
    return newFamily;
  },
};
