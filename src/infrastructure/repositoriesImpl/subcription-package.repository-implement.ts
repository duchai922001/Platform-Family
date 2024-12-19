import { SubscriptionPackageRepository } from "../../domain/repositories/subscription-package.repostitory";
import { createPackageDTO } from "../../presentations/dtos/package/create.dto";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";
import { SubscriptionPackage } from "../model/subscription-package.model";

export class SubscriptionPackageRepositoryImpl
  implements SubscriptionPackageRepository
{
  createPackage(newPackage: createPackageDTO): Promise<ISubscriptionPackage> {
    return SubscriptionPackage.create(newPackage);
  }
}
