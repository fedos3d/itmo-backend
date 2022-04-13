import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { ReviewService } from "./review.service";
import { ReviewRO } from "./review.interface";


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
  async getReview(@Param('id') id: string): Promise<ReviewRO> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
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
  @Post('/:name/:content:/:user_id')
  async addReview(@Param('name') name: string, @Param('content') content: string, @Param('user_id') user_id: number): Promise<ReviewRO> {
    // return await this.profileService.follow(email, username);
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
  async deleteReview(@Param('id') name: number): Promise<ReviewRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}