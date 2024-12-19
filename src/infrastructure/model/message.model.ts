import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người gửi
  content: { type: String, required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "Group", default: null }, // Nhóm tin nhắn
  createdAt: { type: Date, default: Date.now },
});

export const Message = model("Message", MessageSchema);
