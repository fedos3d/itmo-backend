import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { SellerService } from "./seller.service";
import { Seller } from "@prisma/client";

@ApiBearerAuth()
@ApiTags('seller')
@Controller('seller')
export class SellerController {

  constructor(private readonly sellerService: SellerService) {}

  @ApiOperation({
    summary: "Get seller by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'seller is not found.'
  })
  @Get(':id')
  async getSeller(@Param('id') id: string): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add seller"
  })
  @ApiResponse({
    status: 200,
    description: 'seller is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('/:name/:url')
  async addSeller(@Param('name') name: string, @Param('url') url: string): Promise<Seller> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete seller by id"
  })
  @ApiResponse({
    status: 200,
    description: 'seller is deleted.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete('/:id')
  async deleteSeller(@Param('id') name: number): Promise<Seller> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}