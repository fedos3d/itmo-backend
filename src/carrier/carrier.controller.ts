import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  NotImplementedException,
  Body,
  Patch,
  Query,
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
  ApiQuery,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { CarrierService } from './carrier.service'
import { Carrier } from '@prisma/client'
import { CreateCarrierDto } from './dto/create-carrier.dto'
import { UpdateCarrierDto } from './dto/update-carrier.dto'

@ApiBearerAuth()
@ApiTags('carrier')
@Controller('carrier')
export class CarrierController {
  constructor (private readonly carrierService: CarrierService) {}

  @ApiOperation({
    summary: "Get carrier by it's id"
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id')
  async getCarrier (@Param('id', ParseIntPipe) id: number): Promise<Carrier> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get all Carriers'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @ApiQuery({
    name: 'name',
    type: String,
    required: false
  })
  @ApiQuery({
    name: 'supportEmail',
    type: String,
    required: false
  })
  @ApiQuery({
    name: 'rating',
    type: Number,
    required: false
  })
  @Get()
  async getCarriers (
    @Query('name') name?: string,
    @Query('supportEmail') supportEmail?: string,
    @Query('rating', ParseIntPipe) rating?: number
  ): Promise<Carrier[]> {
    // TODO: Add query params
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Update Carrier'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Put(':id')
  async updateCarrier (
    @Param('id', ParseIntPipe) id: number,
    @Body() carrier: UpdateCarrierDto
  ): Promise<Carrier> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Add carrier'
  })
  @ApiCreatedResponse({
    description: 'Carrier added.'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addCarrier (@Body() Carrier: CreateCarrierDto): Promise<Carrier> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Delete carrier by id'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Delete(':id')
  async deleteCarrier (@Param('id') name: number): Promise<Carrier> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }
}
