import { Document, Types } from "mongoose";

export interface IPost extends Document {
  author: Types.ObjectId;
  content: string;
  images?: string[];
  comments?: Types.ObjectId[];
  familyId: Types.ObjectId;
}
