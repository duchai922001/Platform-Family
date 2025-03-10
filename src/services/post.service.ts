import { NotFoundException } from "../domain/exceptions/not-found.exception";
import { FamilyRepositoryImpl } from "../infrastructure/repositoriesImpl/family.repository-implement";
import { PostRepositoryImpl } from "../infrastructure/repositoriesImpl/post.repository-implement";
import { UserRepositoryImpl } from "../infrastructure/repositoriesImpl/user.repository-implement";
import { newPostDTO } from "../presentations/dtos/post/create-post.dto";
import { updatePostDTO } from "../presentations/dtos/post/update-post.dto";
import { IPost } from "../types/post.interface";
import { IUpdatePost } from "../types/post/update-post.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const postRepo = new PostRepositoryImpl();
const userRepo = new UserRepositoryImpl();
const familyRepo = new FamilyRepositoryImpl();
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
  getPostsPublic: async () => {
    return await postRepo.getPostsPublic();
  },
  getPosts: async () => {
    const data = await postRepo.getPosts();
    const mappedData = await Promise.all(
      data.map(async (item) => ({
        postId: item._id,
        author: await userRepo.findUserById(String(item.author)),
        family: await familyRepo.findFamilyById(String(item.familyId)),
        isPrivate: item.isPrivate,
        content: item.content,
      }))
    );
    return mappedData;
  },
  reactionPost: async (postId: string, userId: string) => {
    return await postRepo.reactionPost(postId, userId);
  },
};
