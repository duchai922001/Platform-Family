import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class AlbumDTO {
  @IsString()
  @IsNotEmpty({ message: "Title is required" })
  title!: string;

  @IsString()
  description?: string;

  @IsArray()
  photos!: string[];

  @IsString()
  @IsNotEmpty({ message: "Family ID is required" })
  familyId!: string;
}
