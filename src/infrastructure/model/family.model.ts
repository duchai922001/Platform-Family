import { Schema, model } from "mongoose";

const FamilySchema = new Schema(
  {
    name: { type: String, required: true }, // Tên gia đình
    admin: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người quản lý gói
    members: [{ type: Schema.Types.ObjectId, ref: "User" }], // Thành viên trong gia đình
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionInstance",
      default: null,
    }, // Gói dịch vụ đang sử dụng
    maxMember: { type: Number, default: 2 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Family = model("Family", FamilySchema);
