import { ApiProperty } from '@nestjs/swagger'

export class CreateReviewDto {
  @ApiProperty()
    title: string

  @ApiProperty()
    content: string

  @ApiProperty()
    creationDate: Date

  @ApiProperty()
    rating: number
}
