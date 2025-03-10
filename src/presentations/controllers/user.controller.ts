import { Request, Response } from "express";
import { IUser } from "../../types/user.interface";
import { UpdateInfoUserDto } from "../dtos/user/update-info-user.dto";
import { UserService } from "../../services/user.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const UserController = {
  updateInfoUser: async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const data: UpdateInfoUserDto = req.body;
    const updateUser = await UserService.updateInfoUser(userId, data);
    return res.json(
      successResponse(HttpStatus.OK, "User updated successfully", updateUser)
    );
  },
  getAllUser: async (req: Request, res: Response) => {
    const data = await UserService.getAllUser();
    return res.json(
      successResponse(HttpStatus.OK, "Get data successfully", data)
    );
  },
  deleteUser: async (req: Request, res: Response) => {
    const { userId } = req.params;
    await UserService.deleteUser(userId);
    return res.json(successResponse(HttpStatus.OK, "delete user successfully"));
  },
};
