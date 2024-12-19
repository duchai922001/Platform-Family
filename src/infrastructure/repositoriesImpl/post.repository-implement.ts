import { IPostRepository } from "../../domain/repositories/post.repository";
import { IPost } from "../../types/post.interface";
import { Post } from "../model/post.model";

export class PostRepositoryImpl implements IPostRepository {
  createPost(post: IPost): Promise<IPost> {
    return Post.create(post);
  }
}
