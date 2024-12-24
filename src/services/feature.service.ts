import { FeatureRepositoryImpl } from "../infrastructure/repositoriesImpl/feature.repository-implement";
import { createFeatureDTO } from "../presentations/dtos/feature/create.dto";
import { createAndValidateDto } from "../utils/createAndValidateDto";
const featureRepo = new FeatureRepositoryImpl();
export const FeatureService = {
  create: async (data: createFeatureDTO) => {
    const featureDTO = await createAndValidateDto(createFeatureDTO, data);
    const newFeature = await featureRepo.createFeature(featureDTO);
    return newFeature;
  },
};
