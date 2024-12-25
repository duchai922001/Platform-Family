import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

export class addAndRemoveMemberDTO {
  @IsString()
  @IsNotEmpty()
  familyId!: string;

  @IsArray()
  @ArrayNotEmpty()
  members!: string[];
}
