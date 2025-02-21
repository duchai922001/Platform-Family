import { Schema, model } from "mongoose";
import { IUser } from "../../types/user.interface";
import { RoleEnum } from "../../domain/enums/roles.enum";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    role: {
      type: String,
      enum: Object.values(RoleEnum),
      default: RoleEnum.CUSTOMER,
    },
    familyId: { type: Schema.Types.ObjectId, ref: "Family" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<IUser>("User", UserSchema);
