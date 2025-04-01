import { Document, Types } from "mongoose";

export interface ISubscriptionPackage extends Document {
  name: string;
  maxMembers: number;
  price: number;
  storage: string;
  type: string;
}
