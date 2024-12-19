import { IPost } from "../../types/post.interface";

export interface IPostRepository {
  createPost(post: IPost): Promise<IPost>;
}
