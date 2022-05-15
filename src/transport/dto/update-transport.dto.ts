import { ApiProperty } from '@nestjs/swagger'

export class UpdateTransportDto {
  @ApiProperty()
    name?: string
}
