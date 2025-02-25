import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { UpdateInfoUserDto } from "../dtos/user/update-info-user.dto";
import { catchAsync } from "../../utils/catchAsync";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.put(
  "/update-info/:userId",
  transformAndValidate(UpdateInfoUserDto),
  catchAsync(UserController.updateInfoUser)
);

userRoutes.get("/get-all", catchAsync(UserController.getAllUser));

export default userRoutes;
