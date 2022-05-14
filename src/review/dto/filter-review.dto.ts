import { ApiProperty } from '@nestjs/swagger'

export class FilterReviewDto {
  @ApiProperty()
    title?: string

  @ApiProperty()
    content?: string

  @ApiProperty()
    rating?: string

  @ApiProperty()
    creationDateTime?: string

  @ApiProperty()
    userId?: number

  @ApiProperty()
    ticketId?: number
}
