import { IsOptional, IsString } from "class-validator";
export class updatePackageDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  maxMembers?: number;

  @IsOptional()
  price?: number;

  @IsOptional()
  duration?: number;
}
