import { createPackageDTO } from "../../presentations/dtos/package/create.dto";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";

export interface SubscriptionPackageRepository {
  createPackage(newPackage: createPackageDTO): Promise<ISubscriptionPackage>;
}
