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
  Put,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { TicketsService } from "./tickets.service";
import { Ticket } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { FilterTicketDto } from "./dto/filter-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags("tickets")
@Controller("tickets")
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @ApiOperation({
    summary: "Get ticket by it's id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getTicket(@Param("id", ParseIntPipe) id: number): Promise<Ticket> {
    return await this.ticketsService.getTicket({ id });
  }

  @ApiOperation({
    summary: "Update ticket",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Put(":id")
  async updateTicket(
    @Param("id") id: number,
    @Body() ticket: UpdateTicketDto
  ): Promise<Ticket> {
    return this.ticketsService.updateTicket({ id }, ticket);
  }

  @ApiOperation({
    summary: "Add ticket",
  })
  @ApiCreatedResponse({
    description: "Ticket added.",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addTicket(@Body() Ticket: CreateTicketDto): Promise<Ticket> {
    // return await this.ticketsService.addTicket(Ticket);
    throw new NotImplementedException(); // TODO: Fix seller and transport relation in Ticket
  }

  @ApiOperation({
    summary: "Get All tickets",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get()
  async GetAllTickets(): Promise<Ticket[]> {
    // TODO: add query params
    return await this.ticketsService.getAllTickets();
  }
}
