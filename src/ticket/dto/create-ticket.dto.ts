import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateTicketDto {
  @ApiProperty()
  @IsString()
  from: string;

  @ApiProperty()
  @IsString()
  to: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty()
  @IsNumber()
  sellerId: number;

  @ApiProperty()
  @IsNumber()
  carrierId: number;

  @ApiProperty()
  @IsNumber()
  transportId: number;
}
