import {
  Post,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
  Put,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

import {
  ApiBadRequestResponse,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: "Add user",
  })
  @ApiCreatedResponse({
    description: "User added.",
  })
  @ApiCreatedResponse({
    description: "User added.",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  // @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addUser(@Body() User: CreateUserDto): Promise<User> {
    return await this.userService.addUser(User);
  }

  @ApiOperation({
    summary: "Update user",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Put(":id")
  async updateUser(
    @Param("id") id: number,
    @Body() UpdateUser: UpdateUserDto
  ): Promise<User> {
    return await this.userService.updateUser({ id }, UpdateUser);
  }

  @ApiOperation({
    summary: "Delete user by it's id",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete(":id")
  async deleteUser(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return await this.userService.deleteUser({ id });
  }
}
