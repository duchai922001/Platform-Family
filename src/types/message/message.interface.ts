import { Document } from "mongoose";

export interface IMessage extends Document {
  sender: string;
  receiver: string;
  message: string;
}
