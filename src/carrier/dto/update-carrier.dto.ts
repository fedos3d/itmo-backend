import { ApiProperty } from '@nestjs/swagger'

export class UpdateCarrierDto {
  @ApiProperty()
    name?: string

  @ApiProperty()
    supportEmail?: string

  @ApiProperty()
    rating?: number
}
