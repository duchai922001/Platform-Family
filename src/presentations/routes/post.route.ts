import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { newPostDTO } from "../dtos/post/create-post.dto";
import { catchAsync } from "../../utils/catchAsync";
import { PostController } from "../controllers/post.controller";
import { updatePostDTO } from "../dtos/post/update-post.dto";

const postRoutes = Router();

postRoutes.post(
  "/create",
  transformAndValidate(newPostDTO),
  catchAsync(PostController.createPost)
);

postRoutes.get("/posts-family", catchAsync(PostController.getPostByFamily));
postRoutes.put(
  "/update",
  transformAndValidate(updatePostDTO),
  catchAsync(PostController.updatePost)
);
postRoutes.delete("/delete/:postId", catchAsync(PostController.deletePost));
export default postRoutes;
