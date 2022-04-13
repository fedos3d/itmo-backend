import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { CarrierService } from "./carrier.service";
import { CarrierRO } from "./carrier.interface";


@ApiBearerAuth()
@ApiTags('carrier')
@Controller('carrier')
export class CarrierController {

  constructor(private readonly carrierService: CarrierService) {}

  @ApiOperation({
    summary: "Get carrier by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'carrier is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'carrier is not found.'
  })
  @Get(':id')
  async getCarrier(@Param('id') id: string): Promise<CarrierRO> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add carrier"
  })
  @ApiResponse({
    status: 200,
    description: 'carrier is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('/:name/:support_email')
  async addSCarrier(@Param('name') name: string, @Param('support_email') support_email: string): Promise<CarrierRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete carrier by id"
  })
  @ApiResponse({
    status: 200,
    description: 'carrier is deleted.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete('/:id')
  async deleteCarrier(@Param('id') name: number): Promise<CarrierRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}