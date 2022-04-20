import { Get, Post, Delete, Param, Controller, NotImplementedException, Body, ParseIntPipe } from "@nestjs/common";


import {
  ApiBearerAuth, ApiOperation, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { ReviewService } from "./review.service";
import { Review } from "@prisma/client"
import { CreateReviewDto } from "./dto/create-review.dto";
import { FilterReviewDto } from "./dto/filter-review.dto";



@ApiBearerAuth()
@ApiTags('review')
@Controller('review')
export class ReviewController {

  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({
    summary: "Get Review by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'Review is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Review is not found.'
  })
  @Get(':id')
  async getReview(@Param('id', ParseIntPipe) id: string): Promise<Review> {
    return this.reviewService.getReview({id: id});
    // throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add Review"
  })
  @ApiResponse({
    status: 200,
    description: 'Review is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addReview')
  async addReview(@Body() Review: CreateReviewDto): Promise<Review> {
    // return this.reviewService.addReview(Review);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete Review by id"
  })
  @ApiResponse({
    status: 200,
    description: 'Review is deleted.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete('/:id')
  async deleteReview(@Param('id') name: number): Promise<Review> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Filter reviews"
  })
  @ApiResponse({
    status: 200,
    description: 'Review is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/filterReviews')
  async filterReviews(@Body() filterReview: FilterReviewDto): Promise<Review[]> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }
}