import { Types } from "mongoose";
import { SubscriptionPackageRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-package.repository-implement";
import { createPackageDTO } from "../presentations/dtos/package/create.dto";
import { updatePackageDTO } from "../presentations/dtos/package/update.dto";
import { ISubscriptionPackage } from "../types/subscription-package.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const packageRepository = new SubscriptionPackageRepositoryImpl();
export const SubcriptionPackageService = {
  create: async (data: createPackageDTO): Promise<ISubscriptionPackage> => {
    const newcreatePackageDTO = await createAndValidateDto(
      createPackageDTO,
      data
    );
    const newPackage = await packageRepository.createPackage(
      newcreatePackageDTO
    );
    return newPackage;
  },
  update: async (packageId: string, data: updatePackageDTO) => {
    const updatedcreatePackageDTO = await createAndValidateDto(
      updatePackageDTO,
      data
    );
    const updatedPackage = await packageRepository.updatePackage(
      packageId,
      updatedcreatePackageDTO
    );
    return updatedPackage;
  },

  getAllPackage: async () => {
    return await packageRepository.getAllPackage();
  },
};
