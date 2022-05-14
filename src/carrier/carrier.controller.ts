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
  Put,
  DefaultValuePipe,
} from "@nestjs/common";
import { Request } from "express";

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { CarrierService } from "./carrier.service";
import { Carrier } from "@prisma/client";
import { CreateCarrierDto } from "./dto/create-carrier.dto";
import { UpdateCarrierDto } from "./dto/update-carrier.dto";

@ApiTags("carrier")
@Controller("carrier")
export class CarrierController {
  constructor(private readonly carrierService: CarrierService) {}

  @ApiOperation({
    summary: "Get carrier by it's id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getCarrier(@Param("id", ParseIntPipe) id: number): Promise<Carrier> {
    return await this.carrierService.getCarrier({ id });
  }

  @ApiOperation({
    summary: "Update Carrier",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Put(":id")
  async updateCarrier(
    @Param("id", ParseIntPipe) id: number,
    @Body() carrier: UpdateCarrierDto
  ): Promise<Carrier> {
    return this.carrierService.updateCarrier({ id }, carrier);
  }

  @ApiOperation({
    summary: "Add carrier",
  })
  @ApiCreatedResponse({
    description: "Carrier added.",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addCarrier(@Body() Carrier: CreateCarrierDto): Promise<Carrier> {
    return await this.carrierService.createCarrier(Carrier);
  }

  @ApiOperation({
    summary: "Delete carrier by id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete(":id")
  async deleteCarrier(@Param("id", ParseIntPipe) id: number): Promise<Carrier> {
    return this.carrierService.deleteCarrier({ id });
  }

  @ApiOperation({
    summary: "Get all Carriers",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @ApiQuery({
    name: "name",
    type: String,
    required: false,
  })
  @ApiQuery({
    name: "supportEmail",
    type: String,
    required: false,
  })
  @ApiQuery({
    name: "rating",
    type: Number,
    required: false,
  })
  @Get()
  async getCarriers(
    @Query("name") name?: string,
    @Query("supportEmail")
    supportEmail?: string,
    @Query("rating", ParseIntPipe)
    rating?: number,
    @Query("take", ParseIntPipe) take: number = 1,
    @Query("skip", ParseIntPipe) skip: number = 0
  ): Promise<Carrier[]> {
    // TODO: Add query params
    return this.carrierService.getAllCarriers(take, skip);
  }
}
