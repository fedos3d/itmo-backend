import { ApiProperty } from '@nestjs/swagger'

export class CreateTicketDto {
  @ApiProperty()
    from: string

  @ApiProperty()
    to: string

  @ApiProperty()
    price: number

  @ApiProperty()
    creation: Date
}
