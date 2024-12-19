import { BadRequestException } from "../domain/exceptions/bad-request.exception";
import { UserRepositoryImpl } from "../infrastructure/repositoriesImpl/user.repository-implement";
import { LoginDTO } from "../presentations/dtos/user/login.dto";
import { RegisterDTO } from "../presentations/dtos/user/register.dto";
import { IUser } from "../types/user.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRepository = new UserRepositoryImpl();
export const register = async (data: Partial<RegisterDTO>): Promise<IUser> => {
  const userDTO = await createAndValidateDto(RegisterDTO, data);
  const existedEmail = await userRepository.findUserByEmail(
    userDTO.email || ""
  );
  if (existedEmail) {
    throw new BadRequestException("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userDTO.password, 10);
  return await userRepository.createUser({
    ...userDTO,
    password: hashedPassword,
  });
};

export const login = async (data: Partial<LoginDTO>): Promise<any> => {
  const userDTO = await createAndValidateDto(LoginDTO, data);
  const user = await userRepository.findUserByEmail(userDTO.email);
  if (!user) {
    throw new BadRequestException("Invalid email or password");
  }

  const isMatchPassword = await userRepository.checkPassword(
    user,
    userDTO.password
  );

  if (!isMatchPassword) {
    throw new BadRequestException("Invalid email or password");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set in environment variables");
  }
  const token = jwt.sign(
    { userId: user._id, username: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  const { password: _, ...userWithoutPassword } = user.toObject();
  return { ...userWithoutPassword, access_token: token };
};
