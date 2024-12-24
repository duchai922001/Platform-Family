import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class permissionDTO {
  @IsEnum({ ADD: "add", REMOVE: "remove" })
  @IsNotEmpty()
  type!: string;

  @IsNotEmpty()
  packageId!: string;

  @IsArray()
  @ArrayNotEmpty({ message: "Features cannot be empty" })
  features!: string[];
}
