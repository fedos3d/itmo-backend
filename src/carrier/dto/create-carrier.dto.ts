import { ApiProperty } from '@nestjs/swagger'

export class CreateCarrierDto {
  @ApiProperty()
    name: string

  @ApiProperty()
    supportEmail: string

  @ApiProperty()
    rating: number
}
