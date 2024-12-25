import { Request, Response } from "express";
import { CommentService } from "../../services/comment.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const CommentController = {
  createComment: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newComment = await CommentService.createComment(rawData);
    return res.json(
      successResponse(
        HttpStatus.CREATED,
        "Comment created successfully",
        newComment
      )
    );
  },
  getCommentByPost: async (req: Request, res: Response) => {
    const postId = req.query.postId as string;
    const comments = await CommentService.getCommentsByPost(postId);
    return res.json(
      successResponse(
        HttpStatus.OK,
        "Comments retrieved successfully",
        comments
      )
    );
  },
};
