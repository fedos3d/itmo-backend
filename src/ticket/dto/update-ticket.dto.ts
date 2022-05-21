import { ApiProperty } from "@nestjs/swagger";
import { Min } from "class-validator";

export class UpdateTicketDto {
  @ApiProperty()
  @Min(0)
  price?: number;
}
