import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./auth.response";
import { Response } from "express";
import { LoginUserDto } from "../user/dto/login-user.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";

@ApiBearerAuth()
@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: "Login by username and password",
  })
  @ApiResponse({
    status: 200,
    description: "Successful login",
  })
  @ApiResponse({
    status: 400,
    description: "Wrong password",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden",
  })
  @ApiResponse({
    status: 404,
    description: "User not found",
  })
  @Get("/login")
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<AuthResponse> {
    return this.authService.login(dto, response);
  }

  @ApiOperation({
    summary: "Register new user",
  })
  @ApiResponse({
    status: 200,
    description: "Successful register",
  })
  @ApiResponse({
    status: 400,
    description: "user already exists",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden",
  })
  @Post("/register")
  async register(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<AuthResponse> {
    return this.authService.register(dto, response);
  }
}
