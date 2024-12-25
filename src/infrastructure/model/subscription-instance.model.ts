import { Schema, model } from "mongoose";
import { ISubscriptionInstance } from "../../types/subscription-instance.interface";

const SubscriptionInstanceSchema = new Schema<ISubscriptionInstance>(
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
    usedFeatures: [
      { type: Schema.Types.ObjectId, ref: "Feature", required: true },
    ],
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

export const SubscriptionInstance = model<ISubscriptionInstance>(
  "SubscriptionInstance",
  SubscriptionInstanceSchema
);
