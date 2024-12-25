import { SubscriptionInstanceRepository } from "../../domain/repositories/subscription-instance.repository";
import { RegisterServicePackage } from "../../types/instance/create-service";
import { ISubscriptionInstance } from "../../types/subscription-instance.interface";
import { SubscriptionInstance } from "../model/subscription-instance.model";

export class SubscriptionInstanceRepositoryImpl
  implements SubscriptionInstanceRepository
{
  findByFamilyId(familyId: string): Promise<ISubscriptionInstance | null> {
    return SubscriptionInstance.findOne({ familyId });
  }
  createServicePackage(
    servicePackage: RegisterServicePackage
  ): Promise<ISubscriptionInstance> {
    return SubscriptionInstance.create(servicePackage);
  }
}
