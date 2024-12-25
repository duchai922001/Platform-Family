import { createCommentDTO } from "../../presentations/dtos/comment/create-comment.dto";
import { IComment } from "../../types/comment.interface";

export interface CommentRepository {
  createComment(comment: createCommentDTO): Promise<IComment>;
  getCommentsByPost(postId: string): Promise<IComment[]>;
}
