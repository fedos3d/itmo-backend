import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsLowercase, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsString()
  @IsLowercase()
  @IsNotEmpty()
  name?: string;
}
