import { Get, Post, Delete, Param, Controller, NotImplementedException } from "@nestjs/common";
import { Request } from 'express';
// import { User } from '../user/user.decorator';
import { UserService } from "./user.service";
import { UserRO } from "./user.interface";
import { User } from "./user.decorator";

import {
  ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags
} from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {

  constructor(private readonly profileService: UserService) {}

  @ApiOperation({
    summary: "Get User by it's id"
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
  @Get(':username')
  async getProfile(@User('id') userId: number, @Param('username') username: string): Promise<UserRO> {
    // return await this.profileService.findProfile(userId, username);
    throw new NotImplementedException();
  }

  @Post(':username/follow')
  async follow(@User('email') email: string, @Param('username') username: string): Promise<UserRO> {
    // return await this.profileService.follow(email, username);
    throw new NotImplementedException();
  }

  @Delete(':username/follow')
  async unFollow(@User('id') userId: number,  @Param('username') username: string): Promise<UserRO> {
    // return await this.profileService.unFollow(userId, username);
    throw new NotImplementedException();
  }

}