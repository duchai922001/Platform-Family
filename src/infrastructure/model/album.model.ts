import { Schema, model, Types } from "mongoose";

const AlbumSchema = new Schema(
  {
    title: { type: String, required: true }, // Tên album
    description: { type: String, default: "" }, // Mô tả album
    createdBy: { type: String, required: true }, // Người tạo album
    photos: [{ type: String }], // Mảng các ảnh trong album
    familyId: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Album = model("Album", AlbumSchema);
