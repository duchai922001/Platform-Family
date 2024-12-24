import { Document, Types } from "mongoose";
import { RoleEnum } from "../domain/enums/roles.enum";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: RoleEnum;
  familyId?: Types.ObjectId;
}
