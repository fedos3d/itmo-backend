import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsPassportNumber,
  IsString,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsLowercase()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsLowercase()
  name: string;
}
