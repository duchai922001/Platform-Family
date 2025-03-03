import { Schema, model } from "mongoose";

const MessageGroupSchema = new Schema(
  {
    senderId: { type: String, required: true }, // Người gửi
    message: { type: String, required: true },
    groupId: { type: String, default: null }, // Nhóm tin nhắn
  },
  { timestamps: true, versionKey: false }
);

export const MessageGroup = model("MessageGroup", MessageGroupSchema);
