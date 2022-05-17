import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
  UseGuards,
} from "@nestjs/common";

import {
  ApiBadRequestResponse,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { ReviewService } from "./review.service";
import { Review } from "@prisma/client";
import { CreateReviewDto } from "./dto/create-review.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags("review")
@Controller("review")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({
    summary: "Get Review by it's id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getReview(@Param("id", ParseIntPipe) id: number): Promise<Review> {
    return await this.reviewService.getReview({ id });
  }

  @ApiOperation({
    summary: "Add Review",
  })
  @ApiCreatedResponse({
    description: "Review added.",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addReview(@Body() Review: CreateReviewDto): Promise<Review> {
    return await this.reviewService.addReview(Review);
  }

  @ApiOperation({
    summary: "Delete Review by id",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete(":id")
  async deleteReview(@Param("id", ParseIntPipe) id: number): Promise<Review> {
    return await this.reviewService.deleteReview({ id });
  }

  @ApiOperation({
    summary: "Get all reviews",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get()
  async getReviews(): Promise<Review[]> {
    return await this.reviewService.getAllReviews();
  }
}
