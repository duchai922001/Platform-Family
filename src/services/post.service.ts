import { PostRepositoryImpl } from "../infrastructure/repositoriesImpl/post.repository-implement";
import { newPostDTO } from "../presentations/dtos/post/create-post.dto";
import { updatePostDTO } from "../presentations/dtos/post/update-post.dto";
import { IPost } from "../types/post.interface";
import { IUpdatePost } from "../types/post/update-post.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const postRepo = new PostRepositoryImpl();
export const PostService = {
  createPost: async (post: newPostDTO): Promise<IPost> => {
    const postDTO = await createAndValidateDto(newPostDTO, post);
    const newPost = await postRepo.createPost(postDTO);
    return newPost;
  },
  updatePost: async (postId: string, post: IUpdatePost) => {
    const updatedPost = await postRepo.updatePost(postId, post);
    return updatedPost;
  },

  getPostByFamily: async (familyId: string) => {
    const postsByFamily = await postRepo.findPostByFamilyId(familyId);
    return postsByFamily;
  },

  deletePost: async (postId: string) => {
    return await postRepo.deletePost(postId);
  },
};
