import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Gắn với bài viết
  author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người viết bình luận
  content: { type: String, required: true }, // Nội dung bình luận
  parentCommentId: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  }, // ID bình luận cha (nếu có)
  createdAt: { type: Date, default: Date.now }, // Thời gian tạo
});

export const Comment = model("Comment", CommentSchema);
