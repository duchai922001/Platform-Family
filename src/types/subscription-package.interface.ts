import { Document, Types } from "mongoose";

export interface ISubscriptionPackage extends Document {
  name: string;
  features: Types.ObjectId[];
  maxMembers: number;
  price: number;
  duration: number;
}
