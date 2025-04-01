import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";
import { Features } from "../../../domain/enums/features.enum";
import { Types } from "mongoose";

export class createPackageDTO {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsNotEmpty()
  maxMembers!: number;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  storage!: string;

  @IsNotEmpty()
  type!: string;
}
