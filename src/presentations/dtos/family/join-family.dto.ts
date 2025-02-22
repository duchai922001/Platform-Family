import { IsNotEmpty, IsString } from "class-validator";

export class JoinFamilyDTO {
  @IsString()
  @IsNotEmpty({ message: "Number Code not empty" })
  codeNumber!: string;
}
