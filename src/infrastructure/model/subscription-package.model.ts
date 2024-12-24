import { Schema, model } from "mongoose";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";

const SubscriptionPackageSchema = new Schema<ISubscriptionPackage>(
  {
    name: { type: String, required: true }, // Tên gói dịch vụ (VD: Basic, Premium)
    features: [
      { type: Schema.Types.ObjectId, ref: "Feature", required: true }, // Các tính năng gói cung cấp (tham chiếu đến Feature)
    ],
    maxMembers: { type: Number, required: true }, // Số lượng thành viên tối đa có thể thêm
    price: { type: Number, required: true }, // Giá gói dịch vụ
    duration: { type: Number, required: true }, // Thời hạn (tính bằng ngày)
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SubscriptionPackage = model<ISubscriptionPackage>(
  "SubscriptionPackage",
  SubscriptionPackageSchema
);
