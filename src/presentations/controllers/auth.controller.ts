import { Request, Response } from "express";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { login, register } from "../../services/auth.service";
import { successResponse } from "../../utils/response-success";

export const registerController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const rawData = req.body;
  const newUser = await register(rawData);
  res.json(
    successResponse(HttpStatus.CREATED, "User registered successfully", newUser)
  );
};

export const loginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const rawData = req.body;
  const user = await login(rawData);
  res.json(successResponse(HttpStatus.OK, "User logged in successfully", user));
};
