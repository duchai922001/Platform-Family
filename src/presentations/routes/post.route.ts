import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { newPostDTO } from "../dtos/post/create-post.dto";
import { catchAsync } from "../../utils/catchAsync";
import { PostController } from "../controllers/post.controller";
import { updatePostDTO } from "../dtos/post/update-post.dto";
import { verifyToken } from "../../middlewares/verify.middlewares";

const postRoutes = Router();

postRoutes.post(
  "/create",
  transformAndValidate(newPostDTO),
  catchAsync(PostController.createPost)
);

postRoutes.get("/posts-family", catchAsync(PostController.getPostByFamily));
postRoutes.get("/posts-public", catchAsync(PostController.getPostsPublic));
postRoutes.get("/get-all", catchAsync(PostController.getPosts));
postRoutes.put(
  "/reaction/:postId",
  verifyToken,
  catchAsync(PostController.reactionPost)
);
postRoutes.put(
  "/update",
  transformAndValidate(updatePostDTO),
  catchAsync(PostController.updatePost)
);
postRoutes.delete("/delete/:postId", catchAsync(PostController.deletePost));
export default postRoutes;
