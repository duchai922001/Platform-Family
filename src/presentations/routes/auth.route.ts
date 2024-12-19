import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { RegisterDTO } from "../dtos/user/register.dto";
import { catchAsync } from "../../utils/catchAsync";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";
import { LoginDTO } from "../dtos/user/login.dto";
const authRoutes = Router();

authRoutes.post(
  "/register",
  transformAndValidate(RegisterDTO),
  catchAsync(registerController)
);

authRoutes.post(
  "/login",
  transformAndValidate(LoginDTO),
  catchAsync(loginController)
);
export default authRoutes;
