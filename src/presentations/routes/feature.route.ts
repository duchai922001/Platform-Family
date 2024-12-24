import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createFeatureDTO } from "../dtos/feature/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { FeatureController } from "../controllers/feature.controller";
const featureRoutes = Router();

featureRoutes.post(
  "/create",
  transformAndValidate(createFeatureDTO),
  catchAsync(FeatureController.create)
);
export default featureRoutes;
