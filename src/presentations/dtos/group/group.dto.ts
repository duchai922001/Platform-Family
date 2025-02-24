import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GroupDTO {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: "FamilyId is required" })
  familyId!: string;

  @IsArray()
  @IsNotEmpty({ message: "members is required" })
  members: string[];

  @IsString()
  @IsNotEmpty({ message: "Create By is required" })
  createdBy!: string;
}
