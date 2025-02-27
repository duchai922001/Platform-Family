import { Schema, model } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Message = model("Message", MessageSchema);
