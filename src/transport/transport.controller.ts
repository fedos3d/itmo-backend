import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  NotImplementedException,
  Body,
  ParseIntPipe,
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
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { TransportService } from "./transport.service";
import { Transport } from "@prisma/client";
import { CreateTransportDto } from "./dto/create-transport.dto";

@ApiBearerAuth()
@ApiTags("transport")
@Controller("transport")
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({
    summary: "Get transport by it's id",
  })
  @ApiNotFoundResponse({ description: "Transport not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getTransport(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Transport> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add transport",
  })
  @ApiCreatedResponse({
    description: "Transport added.",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addTransport(
    @Body() Transport: CreateTransportDto
  ): Promise<Transport> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get all transports",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get()
  async getAllTransport(): Promise<Transport[]> {
    // TODO: add query params
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete transport by id",
  })
  @ApiNotFoundResponse({ description: "Transport not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete("/:id")
  async deleteTransport(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Transport> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}
