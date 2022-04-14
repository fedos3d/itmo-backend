import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { TransportService } from "./transport.service";
import { Transport } from "@prisma/client";

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
    description: 'transport is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @ApiResponse({
    status: 404,
    description: 'transport is not found.'
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
    description: 'transport is added.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post(':name')
  async addTransport(@Param('name') name: string): Promise<Transport> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Delete transport by id"
  })
  @ApiResponse({
    status: 200,
    description: 'transport is deleted.'
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