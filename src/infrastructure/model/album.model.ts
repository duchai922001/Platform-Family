import { Schema, model, Types } from "mongoose";

const AlbumSchema = new Schema(
  {
    title: { type: String, required: true }, // Tên album
    description: { type: String, default: "" }, // Mô tả album
    createdBy: { type: Types.ObjectId, ref: "User", required: true }, // Người tạo album
    photos: [{ type: Types.ObjectId, ref: "Photo" }], // Mảng các ảnh trong album
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Album = model("Album", AlbumSchema);
