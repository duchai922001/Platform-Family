import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddMembersGroupDTO {
  @IsString()
  @IsNotEmpty({ message: "GroupId is required" })
  groupId!: string;

  @IsArray()
  @IsOptional()
  userIds?: string[];
}
