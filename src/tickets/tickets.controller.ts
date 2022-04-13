import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { TicketsService } from "./tickets.service";
import { TicketsRO } from "./tickets.interface";

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
    description: 'ticket is found.'
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
  async getTicket(@Param('id') id: string): Promise<TicketsRO> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add ticket"
  })
  @ApiResponse({
    status: 200,
    description: 'ticket is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('/:from/:to/:company/:seller/:price/')
  async addTicket(@Param('from') from: string, @Param('to') to: string,
                  @Param('company') company: string, @Param('seller') seller: string,
                  @Param('price') price: number): Promise<TicketsRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Filter tickets by from field"
  })
  @ApiResponse({
    status: 200,
    description: 'ticket is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('/:from')
  async filterFromTicket(@Param('from') from: string): Promise<TicketsRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}