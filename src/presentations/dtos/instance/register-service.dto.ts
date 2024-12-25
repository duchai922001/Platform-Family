import { IsNotEmpty, IsString } from "class-validator";

export class registerServiceDTO {
  @IsString()
  @IsNotEmpty()
  customerId!: string;

  @IsString()
  @IsNotEmpty()
  packageId!: string;

  @IsString()
  @IsNotEmpty()
  familyId!: string;
}
