import { IsNotEmpty, IsString } from "class-validator";

export class featureFamilyDTO {
  @IsString()
  @IsNotEmpty()
  family!: string;
}
