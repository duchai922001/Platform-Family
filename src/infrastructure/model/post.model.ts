import { Schema, model } from "mongoose";
import { IPost } from "../../types/post.interface";
const PostSchema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người đăng bài
    images: { type: [String], required: true },
    content: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], // Các bình luận
    familyId: { type: Schema.Types.ObjectId, ref: "Family", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = model<IPost>("Post", PostSchema);
