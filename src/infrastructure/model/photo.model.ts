import { Schema, model, Types } from "mongoose";

const PhotoSchema = new Schema({
  url: { type: String, required: true }, // Đường dẫn đến ảnh
  description: { type: String, default: "" }, // Mô tả ảnh
  uploadedBy: { type: Types.ObjectId, ref: "User", required: true }, // Người tải ảnh lên
  createdAt: { type: Date, default: Date.now }, // Ngày tạo ảnh
  updatedAt: { type: Date, default: Date.now }, // Ngày cập nhật ảnh
  // Có thể là nhiều loại liên kết khác nhau cho ảnh
  postId: { type: Types.ObjectId, ref: "Post" }, // Bài viết nếu ảnh là của bài viết
  albumId: { type: Types.ObjectId, ref: "Album" }, // Album nếu ảnh là của album
  commentId: { type: Types.ObjectId, ref: "Comment" }, // Bình luận nếu ảnh liên quan đến bình luận
  // Bạn có thể thêm các trường khác nếu ảnh còn có thể liên kết với các đối tượng khác
});

export const Photo = model("Photo", PhotoSchema);
