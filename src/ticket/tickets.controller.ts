import { Get, Post, Delete, Param, Controller, NotImplementedException, Body, Patch } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { TicketsService } from "./tickets.service";
import { Ticket } from "@prisma/client"
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { FilterTicketDto } from "./dto/filter-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";

@ApiBearerAuth()
@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {

  constructor(private readonly ticketsService: TicketsService) {}

  @ApiOperation({
    summary: "Get ticket by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'Ticket is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Ticket is not found.'
  })
  @Get(':id')
  async getTicket(@Param('id') id: string): Promise<Ticket> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Update ticket"
  })
  @ApiResponse({
    status: 200,
    description: 'Ticket is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Ticket is not found.'
  })
  @Patch('/updateTicket')
  async updateTicket(@Body() ticket: UpdateTicketDto): Promise<Ticket> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add ticket"
  })
  @ApiResponse({
    status: 200,
    description: 'Ticket is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addTicket')
  async addTicket(@Body() Ticket: CreateTicketDto): Promise<Ticket> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }



  @ApiOperation({
    summary: "Filter ticket using filter"
  })
  @ApiResponse({
    status: 200,
    description: 'Tickets found'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('filterTickets')
  async filterTicket(@Body() Filter: FilterTicketDto): Promise<Ticket[]> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}