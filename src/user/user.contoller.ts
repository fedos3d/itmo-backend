import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  NotImplementedException,
  Body,
  ParseIntPipe,
  Put
} from '@nestjs/common'
import { UserService } from './user.service'
import { User, Ticket, Review } from '@prisma/client'

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags
} from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor (private readonly profileService: UserService) {}

  @ApiOperation({
    summary: "Get user by it's id"
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id')
  async getUser (@Param('id', ParseIntPipe) id: number): Promise<User> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Add user'
  })
  @ApiCreatedResponse({
    description: 'User added.'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addUser (@Body() User: CreateUserDto): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get all users'
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get()
  async getALlUsers (): Promise<User> {
    // TODO: add query params
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Update user'
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Put(':id')
  async updateUser (
    @Param('id') id: number,
    @Body() UpdateUser: UpdateUserDto
  ): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: "Delete user by it's id"
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Delete(':id')
  async deleteUser (@Param('id', ParseIntPipe) id: number): Promise<User> {
    // return await this.profileService.unFollow(userId, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get all tickets of a user'
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id/tickets')
  async getAllTicketOfUser (
    @Param('id', ParseIntPipe) id: number
  ): Promise<Ticket[]> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }

  @ApiOperation({
    summary: 'Get all Reviews of a user'
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id/reviews')
  async getAllReviewsOfUser (
    @Param('id', ParseIntPipe) id: number
  ): Promise<Review[]> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException()
  }
}
