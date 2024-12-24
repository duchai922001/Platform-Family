import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";
import { Features } from "../../../domain/enums/features.enum";
import { Types } from "mongoose";

export class createPackageDTO {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsArray()
  @ArrayNotEmpty({ message: "Features cannot be empty" })
  features!: Types.ObjectId[];

  @IsNotEmpty()
  maxMembers!: number;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  duration!: number;
}
