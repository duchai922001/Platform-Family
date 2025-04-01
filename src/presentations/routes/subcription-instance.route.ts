import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { registerServiceDTO } from "../dtos/instance/register-service.dto";
import { catchAsync } from "../../utils/catchAsync";
import { SubcriptionInstanceController } from "../controllers/subcription-instance.controller";
const instanceRoutes = Router();

instanceRoutes.post(
  "/register-service",
  transformAndValidate(registerServiceDTO),
  catchAsync(SubcriptionInstanceController.registerSerivcePacakge)
);
instanceRoutes.get(
  "/",
  catchAsync(SubcriptionInstanceController.getFamilySubscriptions)
);
export default instanceRoutes;
