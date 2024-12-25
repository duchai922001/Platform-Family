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
  findPackageById(packageId: string): Promise<ISubscriptionPackage | null> {
    return SubscriptionPackage.findById(packageId);
  }
  async permissionFeatures(
    packageId: string,
    features: (string | Types.ObjectId)[],
    action: "add" | "remove"
  ): Promise<boolean> {
    try {
      const packageToUpdate = await SubscriptionPackage.findById(packageId);
      if (!packageToUpdate) {
        throw new NotFoundException("Package not found");
      }
      const objectIds = features.map((feature) =>
        typeof feature === "string" ? new Types.ObjectId(feature) : feature
      );

      if (action === "add") {
        const existingFeatures = packageToUpdate.features.map((feature) =>
          feature.toString()
        );

        const newFeatures = objectIds.filter(
          (feature) => !existingFeatures.includes(feature.toString())
        );
        packageToUpdate.features.push(...newFeatures);
      } else if (action === "remove") {
        packageToUpdate.features = packageToUpdate.features.filter(
          (feature) => !objectIds.some((id) => feature.equals(id))
        );
      } else {
        throw new BadRequestException("Invalid action. Use 'add' or 'remove'.");
      }
      await packageToUpdate.save();
      return true;
    } catch (error) {
      return false;
    }
  }
  async checkFeatureInPackage(
    featureId: string,
    packageId: string | Types.ObjectId
  ): Promise<boolean> {
    const packageToFind = await SubscriptionPackage.findById(packageId);
    if (!packageToFind) {
      throw new NotFoundException("Package not found");
    }
    const featureObjectId = new Types.ObjectId(featureId);
    return packageToFind.features.includes(featureObjectId);
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
