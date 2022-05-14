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
import { TicketsService } from './tickets.service'
import { Ticket } from '@prisma/client'
import { CreateTicketDto } from './dto/create-ticket.dto'
import { FilterTicketDto } from './dto/filter-ticket.dto'
import { UpdateTicketDto } from './dto/update-ticket.dto'

@ApiBearerAuth()
@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor (private readonly ticketsService: TicketsService) {}

  @ApiOperation({
    summary: "Get ticket by it's id"
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id')
  async getTicket (@Param('id', ParseIntPipe) id: number): Promise<Ticket> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Update ticket'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Put(':id')
  async updateTicket (
    @Param('id') id: number,
    @Body() ticket: UpdateTicketDto
  ): Promise<Ticket> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Add ticket'
  })
  @ApiCreatedResponse({
    description: 'Ticket added.'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addTicket (@Body() Ticket: CreateTicketDto): Promise<Ticket> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get All tickets'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get()
  async GetAllTickets (): Promise<Ticket[]> {
    // TODO: add query params
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }
}
