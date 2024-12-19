import { Document, Types } from "mongoose";

export interface IFamily extends Document {
  name: string;
  admin: Types.ObjectId;
  members?: Types.ObjectId[];
  subscription: Types.ObjectId;
}
