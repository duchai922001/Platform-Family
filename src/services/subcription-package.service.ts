import { SubscriptionPackageRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-package.repository-implement";
import { createPackageDTO } from "../presentations/dtos/package/create.dto";
import { ISubscriptionPackage } from "../types/subscription-package.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const packageRepository = new SubscriptionPackageRepositoryImpl();
export const SubcriptionPackageService = {
  create: async (data: createPackageDTO): Promise<ISubscriptionPackage> => {
    const newPackageDTO = await createAndValidateDto(createPackageDTO, data);
    const newPackage = await packageRepository.createPackage(newPackageDTO);
    return newPackage;
  },
};
