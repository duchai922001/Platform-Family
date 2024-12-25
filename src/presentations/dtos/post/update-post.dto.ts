import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updatePostDTO {
  @IsString()
  @IsNotEmpty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsArray()
  @IsOptional()
  images: string[];
}
