import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';
// import { user } from '../user/user.decorator';
import { UserService } from "./user.service";


import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";
import { User } from "@prisma/client";

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
    description: 'user is found.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getUser({id: Number(id)});
    // throw new NotImplementedException();
  }

  @ApiOperation({
    summary: "Get user by it's id"
  })
  @ApiResponse({
    status: 200,
    description: 'User is added, return id of a user.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Post(':email/:name')
  async addUser(@Param('email') email: string, @Param('name') name: string): Promise<User> {
    return this.userService.createUser({name,email});

    // throw new NotImplementedException();
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
    return this.userService.deleteUser({id: Number(id)});
    // throw new NotImplementedException();
  }

}