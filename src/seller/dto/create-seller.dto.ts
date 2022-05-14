import { ApiProperty } from '@nestjs/swagger'

export class CreateSellerDto {
  @ApiProperty()
    name: string

  @ApiProperty()
    url: string

  @ApiProperty()
    rating: number
}
