import { Types } from "mongoose";

export interface IScheduler {
  title: string;
  description?: string;
  date: Date;
  familyId: Types.ObjectId;
  createdBy: Types.ObjectId;
}
