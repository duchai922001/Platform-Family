import { IPost } from "../../types/post.interface";
import { IUpdatePost } from "../../types/post/update-post.interface";

export interface IPostRepository {
  createPost(post: IPost): Promise<IPost>;
  findPostByFamilyId(familyId: string): Promise<IPost[]>;
  updatePost(postId: string, post: IUpdatePost): Promise<IPost | null>;
  deletePost(postId: string): Promise<void | null>;
  getPostsPublic(): Promise<IPost[]>;
  getPosts(): Promise<IPost[]>;
}
