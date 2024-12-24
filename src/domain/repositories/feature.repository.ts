import { createFeatureDTO } from "../../presentations/dtos/feature/create.dto";
import { IFeature } from "../../types/feature.interface";

export interface IFeatureRepository {
  createFeature(feature: createFeatureDTO): Promise<IFeature>;
}
