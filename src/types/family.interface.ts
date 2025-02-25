import { Document, Types } from "mongoose";

export interface IFamily extends Document {
  name: string;
  admin: Types.ObjectId;
  members?: string[];
  subscription: Types.ObjectId;
  codeNumber?: string | null;
}
