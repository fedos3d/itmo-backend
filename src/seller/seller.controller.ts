import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  NotImplementedException,
  Body,
  Patch,
  ParseIntPipe,
  Put
} from '@nestjs/common'
import { Request } from 'express'

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { SellerService } from './seller.service'
import { Seller } from '@prisma/client'
import { CreateSellerDto } from './dto/create-seller.dto'
import { FilterSellerDto } from './dto/filter-seller.dto'
import { UpdateSellerDto } from './dto/update-seller.dto'

@ApiBearerAuth()
@ApiTags('seller')
@Controller('seller')
export class SellerController {
  constructor (private readonly sellerService: SellerService) {}

  @ApiOperation({
    summary: "Get seller by it's id"
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id')
  async getSeller (@Param('id', ParseIntPipe) id: number): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get all sellers'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get()
  async getAllSellers (): Promise<Seller> {
    // TODO: add query params
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Update Seller'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Put(':id')
  async updateSeller (@Body() seller: UpdateSellerDto): Promise<Seller> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Add seller'
  })
  @ApiCreatedResponse({
    description: 'Seller added.'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addSeller (@Body() Seller: CreateSellerDto): Promise<Seller> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Delete seller by id'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Delete(':id')
  async deleteSeller (@Param('id', ParseIntPipe) id: number): Promise<Seller> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }
}
