import { Schema, model } from "mongoose";
import { IScheduler } from "../../types/scheduler.interface";
const SchedulerSchema = new Schema<IScheduler>(
  {
    title: { type: String, required: true }, // Tiêu đề lịch hẹn
    description: { type: String, default: "" }, // Nội dung
    date: { type: Date, required: true }, // Ngày hẹn
    familyId: { type: Schema.Types.ObjectId, ref: "Family", required: true }, // Lịch gắn với gia đình
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người tạo
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Scheduler = model<IScheduler>("Scheduler", SchedulerSchema);
