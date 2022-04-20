import { Get, Post, Delete, Param, Controller, NotImplementedException, Body } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { TransportService } from "./transport.service";
import { Transport } from "@prisma/client"
import { CreateTransportDto } from "./dto/create-transport.dto";

@ApiBearerAuth()
@ApiTags('transport')
@Controller('transport')
export class TransportController {

  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({
    summary: "Get transport by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'Transport is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Transport is not found.'
  })
  @Get(':id')
  async getTransport(@Param('id') id: number): Promise<Transport> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add transport"
  })
  @ApiResponse({
    status: 200,
    description: 'Transport is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addTransport')
  async addTransport(@Body() Transport: CreateTransportDto): Promise<Transport> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get transport by name"
  })
  @ApiResponse({
    status: 200,
    description: 'Transport is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'Transport is not found.'
  })
  @Get('/byName/:name')
  async getTransportByName(@Param('name') name: string): Promise<Transport> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get all transports"
  })
  @ApiResponse({
    status: 200,
    description: 'Transport is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getAllTransport')
  async getAllTransport(): Promise<Transport[]> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete transport by id"
  })
  @ApiResponse({
    status: 200,
    description: 'Transport is deleted.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete('/:id')
  async deleteTransport(@Param('id') id: number): Promise<Transport> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}