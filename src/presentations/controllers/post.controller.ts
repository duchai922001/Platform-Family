import { Request, Response } from "express";
import { PostService } from "../../services/post.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const PostController = {
  createPost: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newPost = await PostService.createPost(rawData);
    res.json(
      successResponse(HttpStatus.CREATED, "Post created successfully", newPost)
    );
  },
};
