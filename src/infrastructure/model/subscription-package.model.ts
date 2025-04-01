import { Schema, model } from "mongoose";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";

const SubscriptionPackageSchema = new Schema<ISubscriptionPackage>(
  {
    name: { type: String, required: true }, // Tên gói dịch vụ (VD: Basic, Premium)

    maxMembers: { type: Number, required: true }, // Số lượng thành viên tối đa có thể thêm
    price: { type: Number, required: true }, // Giá gói dịch vụ
    storage: { type: String, required: true }, // Thời hạn (tính bằng ngày)
    type: {
      type: String,
      enum: ["basic", "premium", "titanium"],
      default: "basic",
    },
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
