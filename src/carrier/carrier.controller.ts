import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  Query,
  ParseIntPipe,
  Put,
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
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { CarrierService } from "./carrier.service";
import { Carrier } from "@prisma/client";
import { CreateCarrierDto } from "./dto/create-carrier.dto";
import { UpdateCarrierDto } from "./dto/update-carrier.dto";
import { AuthGuard } from "../auth/auth.guard";

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
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
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
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
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
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
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
    name: "take",
    type: Number,
    required: true,
  })
  @ApiQuery({
    name: "skip",
    type: Number,
    required: true,
  })
  @Get()
  async getCarriers(
    @Query("take", ParseIntPipe) take: number = 1,
    @Query("skip", ParseIntPipe) skip: number = 0
  ): Promise<Carrier[]> {
    return this.carrierService.getAllCarriers(take, skip);
  }
}
