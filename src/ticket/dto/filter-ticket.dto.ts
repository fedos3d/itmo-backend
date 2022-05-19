import { ApiProperty } from '@nestjs/swagger'

export class FilterTicketDto {
  @ApiProperty()
    from: string

  @ApiProperty()
    to: string

  @ApiProperty()
    company: string

  @ApiProperty()
    seller: string

  @ApiProperty()
    transport: string

  @ApiProperty()
    priceStart: number

  @ApiProperty()
    priceEnd: number
}
