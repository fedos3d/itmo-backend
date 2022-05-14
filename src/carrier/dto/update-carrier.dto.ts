import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class UpdateCarrierDto {
  @ApiProperty()
  @IsString()
    name?: string

  @ApiProperty()
  @IsEmail()
    supportEmail?: string
}
