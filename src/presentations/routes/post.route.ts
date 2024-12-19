import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { newPostDTO } from "../dtos/post/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { PostController } from "../controllers/post.controller";

const postRoutes = Router();

postRoutes.post(
  "/create",
  transformAndValidate(newPostDTO),
  catchAsync(PostController.createPost)
);
export default postRoutes;
