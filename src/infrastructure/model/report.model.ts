import { Schema, model } from "mongoose";
import { IPost } from "../../types/post.interface";
import { IReport } from "../../types/report/report.interface";
const ReportSchema = new Schema<IReport>(
  {
    userReport: { type: String, required: true },
    userViolation: { type: String, required: true },
    postId: { type: String, required: true },
    reason: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Report = model<IReport>("Report", ReportSchema);
