import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateTransportDto {
  @ApiProperty()
  @IsString()
    name: string
}
