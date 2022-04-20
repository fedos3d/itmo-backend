import { Get, Post, Delete, Param, Controller, NotImplementedException, Body, Patch } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { CarrierService } from "./carrier.service";
import { Carrier } from "@prisma/client"
import { CreateCarrierDto } from "./dto/create-carrier.dto";
import { UpdateCarrierDto } from "./dto/update-carrier.dto";


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
    description: 'Carrier is not found.'
  })
  @Get(':id')
  async getCarrier(@Param('id') id: string): Promise<Carrier> {
    return this.carrierService.getCarrier({id: Number(id)});
  }

  @ApiOperation({
    summary: "Get all Carriers"
  })
  @ApiResponse({
    status: 200,
    description: 'carrier is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getAllCarriers')
  async getAllCarriers(): Promise<Carrier[]> {
    return this.carrierService.getAllCarriers();
    // throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Update Carrier"
  })
  @ApiResponse({
    status: 200,
    description: 'Carrier is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Patch('/updateCarrier')
  async updateCarrier(@Body() carrier: UpdateCarrierDto): Promise<Carrier[]> {
    // return this.carrierService.updateCarrier(UpdateCarrierDto);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add carrier"
  })
  @ApiResponse({
    status: 200,
    description: 'Carrier is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addCarrier')
  async addSCarrier(@Body() Carrier: CreateCarrierDto): Promise<Carrier> {
    return this.carrierService.createCarrier( Carrier);
    // throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete carrier by id"
  })
  @ApiResponse({
    status: 200,
    description: 'Carrier is deleted.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete('/:id')
  async deleteCarrier(@Param('id') id: number): Promise<Carrier> {
    return this.carrierService.deleteCarrier({id: id});
    // throw new NotImplementedException();
  }
}