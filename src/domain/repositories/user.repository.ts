import { RegisterDTO } from "../../presentations/dtos/user/register.dto";
import { IUser } from "../../types/user.interface";

export interface IUserRepository {
  createUser(user: Partial<RegisterDTO>): Promise<IUser>;
  findUserByEmail(email: string): Promise<IUser | null>;
  checkPassword(user: IUser, password: string): Promise<boolean>;
}
