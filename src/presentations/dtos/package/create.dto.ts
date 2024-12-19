// name
// features
// maxMembers
// price
// duration

import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { Features } from "../../../domain/enums/features.enum";

class featureDTO {
  @IsEnum(Features, { message: "Invalid feature name" })
  featureName!: Features;

  @IsBoolean()
  isEnabled!: boolean;
}
export class createPackageDTO {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsArray()
  @ArrayNotEmpty({ message: "Features cannot be empty" })
  @IsEnum(Features, { each: true, message: "Invalid feature(s) provided" })
  features!: featureDTO[];

  @IsNotEmpty()
  maxMembers!: number;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  duration!: number;
}
