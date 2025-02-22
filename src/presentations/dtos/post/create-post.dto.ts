import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class newPostDTO {
  @IsString()
  @IsNotEmpty({ message: "author is required" })
  author!: string;

  @IsString()
  @IsNotEmpty({ message: "content is required" })
  content!: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsString()
  @IsNotEmpty({ message: "familyId is required" })
  familyId!: string;

  @IsBoolean()
  @IsOptional()
  isPrivate?: boolean;
}
