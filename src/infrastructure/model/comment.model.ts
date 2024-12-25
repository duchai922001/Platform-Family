import { Schema, model } from "mongoose";
import { IComment } from "../../types/comment.interface";

const CommentSchema = new Schema<IComment>(
  {
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Gắn với bài viết
    author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người viết bình luận
    content: { type: String, required: true }, // Nội dung bình luận
    parentCommentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    }, // ID bình luận cha (nếu có)
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Comment = model<IComment>("Comment", CommentSchema);
