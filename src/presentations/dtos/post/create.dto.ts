import { IsArray, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class newPostDTO {
  @IsString()
  @IsEmpty({ message: "author is required" })
  author!: string;

  @IsString()
  @IsEmpty({ message: "content is required" })
  content!: string;

  @IsArray()
  images?: string[];

  @IsString()
  @IsNotEmpty({ message: "familyId is required" })
  familyId!: string;
}
