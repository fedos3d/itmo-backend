import { ApiProperty } from "@nestjs/swagger";

export class ConnectUserDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  name?: string;
}
