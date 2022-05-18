import { ApiProperty } from "@nestjs/swagger";
import { IsLowercase, IsNotEmpty } from "class-validator";

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsLowercase()
  @IsNotEmpty()
  name: string;
}
