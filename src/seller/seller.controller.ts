import { Get, Post, Delete, Param, Controller, NotImplementedException, Body, Patch } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { SellerService } from "./seller.service";
import { Seller } from "@prisma/client"
import { CreateSellerDto } from "./dto/create-seller.dto";
import { FilterSellerDto } from "./dto/filter-seller.dto";
import { UpdateSellerDto } from "./dto/update-seller.dto";

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
    description: 'Seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Seller is not found.'
  })
  @Get(':id')
  async getSeller(@Param('id') id: string): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get seller by it's name"
  })
  @ApiResponse({
    status: 200,
    description: 'Seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Seller is not found.'
  })
  @Get('/byName/:name')
  async getSellerByName(@Param('name') id: string): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }


  @ApiOperation({
    summary: "Update Seller"
  })
  @ApiResponse({
    status: 200,
    description: 'Seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Seller is not found.'
  })
  @Patch('/updateSeller')
  async updateSeller(@Body() seller: UpdateSellerDto): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get all Sellers"
  })
  @ApiResponse({
    status: 200,
    description: 'Seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getAllSellers')
  async getAllSellers(): Promise<Seller[]> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add seller"
  })
  @ApiResponse({
    status: 200,
    description: 'Seller is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addSeller')
  async addSeller(@Body() Seller: CreateSellerDto): Promise<Seller> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get sellers by rating"
  })
  @ApiResponse({
    status: 200,
    description: 'Seller is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getSellersByRating')
  async getSellersByRating(@Body() SellerFilter: FilterSellerDto): Promise<Seller[]> {
    // return await this.profileService.findProfile(userId, username);
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