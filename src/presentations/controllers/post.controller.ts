import { Request, Response } from "express";
import { PostService } from "../../services/post.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";

export const PostController = {
  createPost: async (req: Request, res: Response) => {
    const rawData = req.body;
    console.log({ rawData });
    const newPost = await PostService.createPost(rawData);
    res.json(
      successResponse(HttpStatus.CREATED, "Post created successfully", newPost)
    );
  },

  getPostByFamily: async (req: Request, res: Response) => {
    const familyId = req.query.familyId as string;
    if (!familyId) {
      throw new BadRequestException("FamilyId is required");
    }
    const posts = await PostService.getPostByFamily(familyId);
    res.json(
      successResponse(HttpStatus.OK, "Posts retrieved successfully", posts)
    );
  },
  updatePost: async (req: Request, res: Response) => {
    const { postId, content, images } = req.body;

    const updatePost = await PostService.updatePost(postId, {
      content,
      images,
    });
    return res.json(
      successResponse(HttpStatus.OK, "Post updated successfully", updatePost)
    );
  },

  deletePost: async (req: Request, res: Response) => {
    const { postId } = req.params;
    await PostService.deletePost(postId);
    return res.json(
      successResponse(HttpStatus.OK, "Post deleted successfully", {})
    );
  },

  getPostsPublic: async (req: Request, res: Response) => {
    const posts = await PostService.getPostsPublic();
    return res.json(
      successResponse(HttpStatus.OK, "Get data successfully", posts)
    );
  },
};
