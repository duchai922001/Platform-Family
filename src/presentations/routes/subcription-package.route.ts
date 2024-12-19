import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createPackageDTO } from "../dtos/package/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { SubcriptionPackageController } from "../controllers/subcription-package.controller";
const packageRoutes = Router();

packageRoutes.post(
  "/create",
  transformAndValidate(createPackageDTO),
  catchAsync(SubcriptionPackageController.create)
);
export default packageRoutes;
