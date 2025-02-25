import { Document } from "mongoose";

export interface IReport extends Document {
  userReport: string;
  userViolation: string;
  postId: string;
  reason: string;
}
