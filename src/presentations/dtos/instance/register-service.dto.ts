import { IsNotEmpty, IsString } from "class-validator";

export class registerServiceDTO {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  packageId!: string;

  @IsString()
  @IsNotEmpty()
  familyId!: string;
}
