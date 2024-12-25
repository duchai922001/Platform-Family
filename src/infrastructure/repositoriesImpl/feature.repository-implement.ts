import { IFeatureRepository } from "../../domain/repositories/feature.repository";
import { createFeatureDTO } from "../../presentations/dtos/feature/create.dto";
import { IFeature } from "../../types/feature.interface";
import { Feature } from "../model/feature.model";

export class FeatureRepositoryImpl implements IFeatureRepository {
  findById(featureId: string): Promise<IFeature | null> {
    return Feature.findById(featureId);
  }
  createFeature(feature: createFeatureDTO): Promise<IFeature> {
    return Feature.create(feature);
  }
}
