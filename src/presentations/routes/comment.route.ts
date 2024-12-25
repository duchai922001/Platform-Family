import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createCommentDTO } from "../dtos/comment/create-comment.dto";
import { catchAsync } from "../../utils/catchAsync";
import { CommentController } from "../controllers/comment.controller";
const commentRoutes = Router();

commentRoutes.post(
  "/create",
  transformAndValidate(createCommentDTO),
  catchAsync(CommentController.createComment)
);

commentRoutes.get(
  "/get-comments-post",
  catchAsync(CommentController.getCommentByPost)
);
export default commentRoutes;
