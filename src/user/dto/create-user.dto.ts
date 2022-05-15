import { ApiProperty } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  IsPassportNumber,
  IsString
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
    email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    password: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    name: string
}
