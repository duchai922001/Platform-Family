import { IUserRepository } from "../../domain/repositories/user.repository";
import bcrypt from "bcrypt";
import { IUser } from "../../types/user.interface";
import { User } from "../model/user.model";
import { RegisterDTO } from "../../presentations/dtos/user/register.dto";

export class UserRepositoryImpl implements IUserRepository {
  async checkPassword(user: IUser, password: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  }
  async createUser(user: Partial<RegisterDTO>): Promise<IUser> {
    return await User.create(user);
  }
  async findUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }
}
