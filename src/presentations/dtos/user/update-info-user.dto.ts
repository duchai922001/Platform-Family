import { IsString } from "class-validator";

export class UpdateInfoUserDto {
  @IsString()
  name!: string;

  @IsString()
  avatar!: string;
}
