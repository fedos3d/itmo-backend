import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateCarrierDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
    name: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
    supportEmail: string
}
