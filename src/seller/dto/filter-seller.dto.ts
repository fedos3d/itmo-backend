import { ApiProperty } from "@nestjs/swagger";

export class FilterSellerDto {
  @ApiProperty()
  id: number;
}
