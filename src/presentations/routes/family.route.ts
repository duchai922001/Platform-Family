import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createFamilyDTO } from "../dtos/family/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { FamilyController } from "../controllers/family.controller";
const familyRoutes = Router();

familyRoutes.post(
  "/create",
  transformAndValidate(createFamilyDTO),
  catchAsync(FamilyController.create)
);
export default familyRoutes;
