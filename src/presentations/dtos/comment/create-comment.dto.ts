import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createCommentDTO {
  @IsString()
  @IsNotEmpty()
  postId!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsString()
  @IsOptional()
  parentCommentId?: string;
}
