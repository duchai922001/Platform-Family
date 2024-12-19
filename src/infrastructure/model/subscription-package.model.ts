import { Schema, model } from "mongoose";
import { ISubscriptionPackage } from "../../types/subscription-package.interface";
import { Features } from "../../domain/enums/features.enum";

const SubscriptionPackageSchema = new Schema<ISubscriptionPackage>(
  {
    name: { type: String, required: true }, // Tên gói dịch vụ (VD: Basic, Premium)
    features: {
      type: [{ type: String, enum: Object.values(Features) }], // Các tính năng chỉ thuộc enum Features
      required: true,
    }, // Các tính năng gói dịch vụ cung cấp
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
