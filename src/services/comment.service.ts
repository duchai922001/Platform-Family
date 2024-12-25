import { CommentRepositoryImpl } from "../infrastructure/repositoriesImpl/comment.repository-implement";
import { createCommentDTO } from "../presentations/dtos/comment/create-comment.dto";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const commentRepo = new CommentRepositoryImpl();
export const CommentService = {
  createComment: async (comment: createCommentDTO) => {
    const commentDTO = await createAndValidateDto(createCommentDTO, comment);
    const newComment = await commentRepo.createComment(commentDTO);
    return newComment;
  },
  getCommentsByPost: async (postId: string) => {
    const comments = await commentRepo.getCommentsByPost(postId);
    const commentMap: Record<string, any> = comments.reduce((acc, comment) => {
      acc[comment._id.toString()] = { ...comment, replies: [] }; // Mỗi bình luận có mảng replies rỗng
      return acc;
    }, {} as Record<string, any>);
    const rootComments: any[] = [];

    comments.forEach((comment) => {
      if (comment.parentCommentId) {
        // Nếu là câu trả lời, thêm vào mảng replies của bình luận cha
        commentMap[comment.parentCommentId.toString()]?.replies.push(
          commentMap[comment._id]
        );
      } else {
        // Nếu là bình luận gốc, thêm vào danh sách rootComments
        rootComments.push(commentMap[comment._id]);
      }
    });

    return rootComments;
  },
};
