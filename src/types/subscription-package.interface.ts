import { Document } from "mongoose";
import { Features } from "../domain/enums/features.enum";

export interface ISubscriptionPackage extends Document {
  name: string;
  features: Features[];
  maxMembers: number;
  price: number;
  duration: number;
}
