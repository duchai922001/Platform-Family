import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createPackageDTO } from "../dtos/package/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { SubcriptionPackageController } from "../controllers/subcription-package.controller";
import { updatePackageDTO } from "../dtos/package/update.dto";
import { permissionDTO } from "../dtos/package/permission.dto";
const packageRoutes = Router();

packageRoutes.post(
  "/create",
  transformAndValidate(createPackageDTO),
  catchAsync(SubcriptionPackageController.create)
);

packageRoutes.put(
  "/update/:packageId",
  transformAndValidate(updatePackageDTO),
  catchAsync(SubcriptionPackageController.update)
);

packageRoutes.get(
  "/get-all",
  catchAsync(SubcriptionPackageController.getAllPackage)
);
export default packageRoutes;
