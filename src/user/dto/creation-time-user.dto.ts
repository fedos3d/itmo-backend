import { ApiProperty } from '@nestjs/swagger'

export class CreationTimeUserDto {
  @ApiProperty()
    from: Date

  @ApiProperty()
    to: Date
}
