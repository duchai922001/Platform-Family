import { Document, Types } from "mongoose";

export interface ISubscriptionInstance extends Document {
  userId: Types.ObjectId;
  packageId: Types.ObjectId;
  familyId: Types.ObjectId;
  urlBill: string;
}
