import { CommentRepository } from "../../domain/repositories/comment.repository";
import { createCommentDTO } from "../../presentations/dtos/comment/create-comment.dto";
import { IComment } from "../../types/comment.interface";
import { Comment } from "../model/comment.model";

export class CommentRepositoryImpl implements CommentRepository {
  getCommentsByPost(postId: string): Promise<IComment[]> {
    return Comment.find({ postId }).lean<IComment[]>();
  }
  createComment(comment: createCommentDTO): Promise<IComment> {
    return Comment.create(comment);
  }
}
