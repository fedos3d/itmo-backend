import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Ticket } from '@prisma/client'

export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    title: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
    content: string

  @ApiProperty()
  @IsNumber()
    userId: number

  @ApiProperty()
  @IsNumber()
    rating: number

  @ApiProperty()
  @IsNumber()
    ticket: Ticket
}
