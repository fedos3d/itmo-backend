import { ApiProperty } from '@nestjs/swagger'

export class CreateTransportDto {
  @ApiProperty()
    name: string
}
