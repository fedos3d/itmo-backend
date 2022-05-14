import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateCarrierDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    name: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
    supportEmail: string
}
