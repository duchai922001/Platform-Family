import { Types } from "mongoose";
import { NotFoundException } from "../../domain/exceptions/not-found.exception";
import { SubscriptionPackageRepository } from "../../domain/repositories/subscription-package.repostitory";
import { createPackageDTO } from "../../presentations/dtos/package/create.dto";
import { updatePackageDTO } from "../../presentations/dtos/package/update.dto";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";
import { SubscriptionPackage } from "../model/subscription-package.model";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";

export class SubscriptionPackageRepositoryImpl
  implements SubscriptionPackageRepository
{
  async getAllPackage(): Promise<ISubscriptionPackage[]> {
    return await SubscriptionPackage.find();
  }
  findPackageById(packageId: string): Promise<ISubscriptionPackage | null> {
    return SubscriptionPackage.findById(packageId);
  }

  updatePackage(
    packageId: string,
    data: updatePackageDTO
  ): Promise<ISubscriptionPackage | null> {
    return SubscriptionPackage.findByIdAndUpdate(packageId, data, {
      new: true,
    });
  }
  createPackage(newPackage: createPackageDTO): Promise<ISubscriptionPackage> {
    return SubscriptionPackage.create(newPackage);
  }
}
