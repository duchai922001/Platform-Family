import { IFeatureRepository } from "../../domain/repositories/feature.repository";
import { createFeatureDTO } from "../../presentations/dtos/feature/create.dto";
import { IFeature } from "../../types/feature.interface";
import { Feature } from "../model/feature.model";

export class FeatureRepositoryImpl implements IFeatureRepository {
  createFeature(feature: createFeatureDTO): Promise<IFeature> {
    return Feature.create(feature);
  }
}
