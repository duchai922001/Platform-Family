import { Document } from "mongoose";

export interface IGroupMessage extends Document {
  senderId: string;
  groupId: string;
  message: string;
}
