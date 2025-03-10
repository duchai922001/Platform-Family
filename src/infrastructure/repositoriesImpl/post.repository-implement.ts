import { IPostRepository } from "../../domain/repositories/post.repository";
import { IPost } from "../../types/post.interface";
import { IUpdatePost } from "../../types/post/update-post.interface";
import { Post } from "../model/post.model";

export class PostRepositoryImpl implements IPostRepository {
  async reactionPost(postId: string, userId: string): Promise<IPost | null> {
    const findPost = await Post.findById(postId);

    if (!findPost) {
      throw new Error("Không tìm thấy bài post nào");
    }
    const userLikeList = findPost.userLike ?? [];
    const isLiked = userLikeList.includes(userId);

    return await Post.findByIdAndUpdate(
      postId,
      isLiked
        ? { $pull: { userLike: userId } }
        : { $addToSet: { userLike: userId } },
      { new: true }
    );
  }
  async getPosts(): Promise<IPost[]> {
    return await Post.find();
  }
  async getPostsPublic(): Promise<IPost[]> {
    return await Post.find({ isPrivate: false }).sort({ createdAt: -1 });
  }
  async deletePost(postId: string): Promise<void | null> {
    return await Post.findByIdAndDelete(postId);
  }
  async updatePost(postId: string, post: IUpdatePost): Promise<IPost | null> {
    return await Post.findByIdAndUpdate(postId, post, { new: true });
  }
  async findPostByFamilyId(familyId: string): Promise<IPost[]> {
    return await Post.find({ familyId }).sort({ createdAt: -1 });
  }
  async createPost(post: IPost): Promise<IPost> {
    return await Post.create(post);
  }
  async findPostById(postId: string): Promise<IPost | null> {
    return await Post.findById(postId);
  }
}
