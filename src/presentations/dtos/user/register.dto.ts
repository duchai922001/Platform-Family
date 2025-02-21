import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDTO {
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @IsString()
  name?: string;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password!: string;
}
