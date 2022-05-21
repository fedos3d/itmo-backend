import { ApiProperty } from "@nestjs/swagger";
import { Max, Min } from "class-validator";

export class UpdateReviewDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  content?: string;

  @ApiProperty()
  @Min(1)
  @Max(10)
  rating?: number;
}
