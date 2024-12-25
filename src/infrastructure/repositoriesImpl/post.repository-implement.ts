import { IPostRepository } from "../../domain/repositories/post.repository";
import { IPost } from "../../types/post.interface";
import { IUpdatePost } from "../../types/post/update-post.interface";
import { Post } from "../model/post.model";

export class PostRepositoryImpl implements IPostRepository {
  deletePost(postId: string): Promise<void | null> {
    return Post.findByIdAndDelete(postId);
  }
  updatePost(postId: string, post: IUpdatePost): Promise<IPost | null> {
    return Post.findByIdAndUpdate(postId, post, { new: true });
  }
  findPostByFamilyId(familyId: string): Promise<IPost[]> {
    return Post.find({ familyId });
  }
  createPost(post: IPost): Promise<IPost> {
    return Post.create(post);
  }
}
