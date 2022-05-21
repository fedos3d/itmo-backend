import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateSellerDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  url?: string;
}
