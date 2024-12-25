import { RegisterServicePackage } from "../../types/instance/create-service";
import { ISubscriptionInstance } from "../../types/subscription-instance.interface";

export interface SubscriptionInstanceRepository {
  createServicePackage(
    servicePackage: RegisterServicePackage
  ): Promise<ISubscriptionInstance>;
  findByFamilyId(familyId: string): Promise<ISubscriptionInstance | null>;
}
