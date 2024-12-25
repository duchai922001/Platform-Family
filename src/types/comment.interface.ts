import { Document, Types } from "mongoose";

export interface IComment extends Document {
  _id: string;
  postId: Types.ObjectId;
  author: Types.ObjectId;
  content: string;
  parentCommentId: Types.ObjectId | null;
}
