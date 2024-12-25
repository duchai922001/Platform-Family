import { NotFoundException } from "../domain/exceptions/not-found.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { SubscriptionInstanceRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-instance.repository-implement";
import { SubscriptionPackageRepositoryImpl } from "../infrastructure/repositoriesImpl/subcription-package.repository-implement";
import { registerServiceDTO } from "../presentations/dtos/instance/register-service.dto";
import { IUpdateFamilyInstance } from "../types/family/update-family-instance.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";
import moment from "moment";
const packageRepo = new SubscriptionPackageRepositoryImpl();
const instanceRepo = new SubscriptionInstanceRepositoryImpl();
const familyRepo = new FamilyRepositoryImpl();
export const SubcriptionInstanceService = {
  registerServicePackage: async (data: registerServiceDTO) => {
    try {
      const registerPackageDTO = await createAndValidateDto(
        registerServiceDTO,
        data
      );
      const packageExist = await packageRepo.findPackageById(
        registerPackageDTO.packageId
      );
      if (!packageExist) {
        throw new NotFoundException("Package not found");
      }
      const newResgisterInstance = {
        customerId: registerPackageDTO.customerId,
        packageId: registerPackageDTO.packageId,
        familyId: registerPackageDTO.familyId,
        usedFeatures: packageExist.features,
        startDate: moment().startOf("day").toDate(),
        endDate: moment()
          .add(packageExist.duration, "days")
          .endOf("day")
          .toDate(),
        remainingMembers: packageExist.maxMembers,
      };
      const newInstance = await instanceRepo.createServicePackage(
        newResgisterInstance
      );
      const IUpdateFamilyInstance: IUpdateFamilyInstance = {
        subscription: newInstance._id.toString(),
        maxMember: packageExist.maxMembers,
      };
      await familyRepo.registerInstance(
        registerPackageDTO.familyId,
        IUpdateFamilyInstance
      );
      return newInstance;
    } catch (error) {
      throw error;
    }
  },
};
