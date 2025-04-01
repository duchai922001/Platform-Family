import { Types } from "mongoose";
import { createPackageDTO } from "../../presentations/dtos/package/create.dto";
import { updatePackageDTO } from "../../presentations/dtos/package/update.dto";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";

export interface SubscriptionPackageRepository {
  createPackage(newPackage: createPackageDTO): Promise<ISubscriptionPackage>;
  updatePackage(
    packageId: string,
    data: updatePackageDTO
  ): Promise<ISubscriptionPackage | null>;

  findPackageById(packageId: string): Promise<ISubscriptionPackage | null>;
  getAllPackage(): Promise<ISubscriptionPackage[]>;
}
