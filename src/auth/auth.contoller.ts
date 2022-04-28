import { Body, Controller, Get, Post, Redirect, Render, Res, UseFilters, UseGuards } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { AuthGuard } from "./auth.guard";
import {BadRequestFilter} from "./bad-req.filter";
import { LoginUserDto } from "../user/dto/login-user.dto";

@ApiTags("Типа авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Log in system" })
  @ApiResponse({ status: 200, description: "Returns user token" })
  @ApiBadRequestResponse({ description: "Invalid user credentials" })
  @ApiResponse({
    status: 401,
    description: "Username or password not correct",
  })
  @UseFilters(new BadRequestFilter("login"))
  @Post("/login")
  async login(@Body() credentials: LoginUserDto, @Res({ passthrough: true }) response: Response) {
    await this.authService.login(credentials, response);
  }

  @ApiOperation({ summary: "Register in system" })
  @ApiResponse({ status: 201, description: "Returns user token" })
  @ApiBadRequestResponse({ description: "Invalid user credentials" })
  @ApiUnauthorizedResponse({
    description: "User with this username already exists",
  })
  @Post("/register")
  async register(@Body() user: CreateUserDto, @Res({ passthrough: true }) response: Response) {
    return await this.authService.register(user, response);
  }

  @UseGuards(AuthGuard)
  @ApiCookieAuth()
  @ApiOperation({ summary: "logout" })
  @Redirect("login")
  @Get("logout")
  async logout(@Res({ passthrough: true }) response: Response) {
    this.authService.logout(response);
  }
}
