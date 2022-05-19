import { ApiProperty } from '@nestjs/swagger'

export class UpdateSellerDto {
  @ApiProperty()
    name?: string

  @ApiProperty()
    url?: string

  @ApiProperty()
    rating?: number
}
