import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./auth.response";
import { Response } from "express";
import { LoginUserDto } from "../user/dto/login-user.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: "Login by username and password",
  })
  @ApiCreatedResponse({
    description: "Successful login.",
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
  @Post("/login")
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<AuthResponse> {
    return this.authService.login(dto, response);
  }

  @ApiOperation({
    summary: "Register new user",
  })
  @ApiCreatedResponse({
    description: "User registered.",
  })
  @ApiResponse({
    status: 400,
    description: "user already exists",
  })
  @ApiBadRequestResponse({ description: "Invalid request." })
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
