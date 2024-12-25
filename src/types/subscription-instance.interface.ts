import { Document, Types } from "mongoose";

export interface ISubscriptionInstance extends Document {
  _id: Types.ObjectId;
  customerId: Types.ObjectId;
  packageId: Types.ObjectId;
  familyId: Types.ObjectId;
  usedFeatures: Types.ObjectId[];
  startDate: Date;
  endDate: Date;
  remainingMembers: number;
}
