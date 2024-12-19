import { Schema, model } from "mongoose";
const SchedulerSchema = new Schema({
  title: { type: String, required: true }, // Tiêu đề lịch hẹn
  description: { type: String, default: "" }, // Nội dung
  date: { type: Date, required: true }, // Ngày hẹn
  familyId: { type: Schema.Types.ObjectId, ref: "Family", required: true }, // Lịch gắn với gia đình
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người tạo
  createdAt: { type: Date, default: Date.now },
});

export const Scheduler = model("Scheduler", SchedulerSchema);
