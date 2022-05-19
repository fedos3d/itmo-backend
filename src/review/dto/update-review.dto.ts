import { ApiProperty } from '@nestjs/swagger'

export class UpdateReviewDto {
  @ApiProperty()
    title?: string

  @ApiProperty()
    content?: string

  @ApiProperty()
    creationDate?: Date

  @ApiProperty()
    rating?: number
}
