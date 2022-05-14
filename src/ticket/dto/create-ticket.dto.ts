import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateTicketDto {
  @ApiProperty()
  @IsString()
    from: string

  @ApiProperty()
  @IsString()
    to: string

  @ApiProperty()
  @IsNumber()
    price: number

  @ApiProperty()
  @IsString()
    company: string
}
