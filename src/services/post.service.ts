import { PostRepositoryImpl } from "../infrastructure/repositoriesImpl/post.repository-implement";
import { newPostDTO } from "../presentations/dtos/post/create.dto";
import { IPost } from "../types/post.interface";
import { createAndValidateDto } from "../utils/createAndValidateDto";

const postRepository = new PostRepositoryImpl();
export const PostService = {
  createPost: async (post: newPostDTO): Promise<IPost> => {
    const postDTO = await createAndValidateDto(newPostDTO, post);
    const newPost = await postRepository.createPost(postDTO);
    return newPost;
  },
};
