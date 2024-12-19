import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class createFamilyDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  admin!: string;

  @IsArray()
  members?: string[];

  @IsString()
  @IsOptional()
  subscription?: string;
}
