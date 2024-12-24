import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Features } from "../../../domain/enums/features.enum";

export class createFeatureDTO {
  @IsEnum(Features)
  @IsNotEmpty()
  featureName!: Features;

  @IsString()
  @IsNotEmpty()
  description!: string;
}
