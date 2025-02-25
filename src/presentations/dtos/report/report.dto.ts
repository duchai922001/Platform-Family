import { IsNotEmpty, IsString } from "class-validator";

export class ReportDTO {
  @IsString()
  @IsNotEmpty({ message: "user report is required" })
  userReport!: string;

  @IsString()
  @IsNotEmpty({ message: "user violation is required" })
  userViolation!: string;

  @IsString()
  @IsNotEmpty({ message: "postId is required" })
  postId!: string;

  @IsString()
  @IsNotEmpty({ message: "reason is required" })
  reason!: string;
}
