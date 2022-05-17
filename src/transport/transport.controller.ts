import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
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
  ApiTags,
} from "@nestjs/swagger";
import { TransportService } from "./transport.service";
import { Transport } from "@prisma/client";
import { CreateTransportDto } from "./dto/create-transport.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags("transport")
@Controller("transport")
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({
    summary: "Get transport by it's id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getTransport(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Transport> {
    return await this.transportService.getTransport({ id });
  }

  @ApiOperation({
    summary: "Add transport",
  })
  @ApiCreatedResponse({
    description: "Transport added.",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addTransport(
    @Body() Transport: CreateTransportDto
  ): Promise<Transport> {
    return await this.transportService.addTransport(Transport);
  }

  @ApiOperation({
    summary: "Get all transports",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get()
  async getAllTransport(): Promise<Transport[]> {
    return await this.transportService.getAllTransport();
  }

  @ApiOperation({
    summary: "Delete transport by id",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete("/:id")
  async deleteTransport(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Transport> {
    return await this.transportService.deleteTranposrt({ id });
  }
}
