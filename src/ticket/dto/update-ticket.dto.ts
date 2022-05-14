import { ApiProperty } from '@nestjs/swagger'

export class UpdateTicketDto {
  @ApiProperty()
    from?: string

  @ApiProperty()
    to?: string

  @ApiProperty()
    price?: number
}
