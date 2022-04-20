import { Get, Post, Delete, Param, Controller, NotImplementedException, Body, Patch } from "@nestjs/common";
import { UserService } from "./user.service";
import { User, Ticket, Review } from "@prisma/client"

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreationTimeUserDto } from "./dto/creation-time-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: "Get user by it's id"
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'User is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Add user"
  })
  @ApiResponse({
    status: 200,
    description: 'User is added, return id of a user.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post('addUser')
  async addUser(@Body() User: CreateUserDto): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get user by it's email"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/byEmail/:email')
  async getByEmail(@Param('email') email: string): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get user by it's name"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/byName/:name')
  async getByName(@Param('name') name: string): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }


  @ApiOperation({
    summary: "Get user by it's creationTime"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/filterByCreationTime')
  async filterByCreationTime(@Body() CreationTime: CreationTimeUserDto): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Update user"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Patch('/updateUser')
  async updateUser(@Body() UpdateUser: UpdateUserDto): Promise<User> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }



  @ApiOperation({
    summary: "Delete user by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'User is removed.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    // return await this.profileService.unFollow(userId, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get all tickets of a user"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getAllTickets/:id')
  async getAllTicketOfUser(@Param('id') id: number): Promise<Ticket[]> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get all Reviews of a user"
  })
  @ApiResponse({
    status: 200,
    description: 'User if found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/getAllUserReviews/:id')
  async getAllReviewsOfUser(@Param('id') id: number): Promise<Review[]> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }
}