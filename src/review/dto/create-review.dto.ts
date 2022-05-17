import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

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
  @Min(1)
  @Max(10)
    rating: number

  @ApiProperty()
  @IsNumber()
    ticketId: number
}
