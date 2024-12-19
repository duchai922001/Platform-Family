import { Schema, model } from "mongoose";

const SubscriptionInstanceSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Gắn với một khách hàng
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPackage",
      required: true,
    }, // Gói dịch vụ
    familyId: { type: Schema.Types.ObjectId, ref: "Family", required: true }, // Gắn với một gia đình
    startDate: { type: Date, required: true }, // Ngày bắt đầu
    endDate: { type: Date, required: true }, // Ngày hết hạn
    remainingMembers: { type: Number, required: true }, // Số lượng thành viên còn có thể thêm
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SubscriptionInstance = model(
  "SubscriptionInstance",
  SubscriptionInstanceSchema
);
