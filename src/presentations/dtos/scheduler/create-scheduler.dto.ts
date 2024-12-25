import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createSchedulerDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  familyId: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
