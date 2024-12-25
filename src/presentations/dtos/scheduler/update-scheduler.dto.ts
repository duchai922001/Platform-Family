import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateSchedulerDTO {
  @IsString()
  @IsNotEmpty()
  schedulerId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  date: Date;
}
