import {
  Render,
  Controller,
  Get,
  UseInterceptors,
  Post,
  Redirect,
  Res,
  Body,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { BackendResponseTimeInterceptor } from "./interceptor";
import { ApiExcludeController } from "@nestjs/swagger";
import { AuthResponse } from "./auth/auth.response";
import { CreateUserDto } from "./user/dto/create-user.dto";
import { AuthService } from "./auth/auth.service";
import { LoginUserDto } from "./user/dto/login-user.dto";
import { Request, Response } from "express";
import { AuthenticationInterceptor } from "./logging.intereptor";
import { AuthGuard } from "./auth/auth.guard";

@ApiExcludeController()
@UseInterceptors(BackendResponseTimeInterceptor, AuthenticationInterceptor)
@Controller()
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authSerivce: AuthService
  ) {}

  @Get()
  @Render("index")
  root() {
    return { title: "Аникеев Федор Николаевич" };
  }

  @Get("my_portfolio")
  @Render("my_portfolio")
  portfolio() {
    return { title: "Мое портфолио" };
  }

  @Get("my_achievements")
  @Render("my_achievements")
  achiv() {
    return { title: "Мои достижения" };
  }

  @Get("constructor")
  @Render("constructor")
  construct() {
    return { title: "Конструктор" };
  }

  @Get("fetch")
  @Render("fetch")
  get() {
    return { title: "Fetch API" };
  }

  @Get("logged")
  @Render("login")
  logged() {
    return { logged: true };
  }

  @Get("notlogged")
  @Render("login")
  notlogged() {
    return { logged: false };
  }

  @UseGuards(AuthGuard)
  @Get("list_carrier")
  @Render("carrier")
  getcarrier() {
    return { title: "list carrier" };
  }

  @Get("/login")
  @Render("new_login")
  getLoginPage() {
    return {};
  }

  @Get("/register")
  @Render("register")
  getRegisterPage() {
    return {};
  }

  @Post("login")
  @Redirect("/")
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<AuthResponse> {
    console.log(dto);
    return this.authSerivce.login(dto, response);
  }

  @Post("register")
  @Redirect("/login")
  async register(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<AuthResponse> {
    console.log(dto);
    console.log("he he");
    return this.authSerivce.register(dto, response);
  }

  @Get("logout")
  @Redirect("/login")
  async logout(@Res({ passthrough: true }) response: Response) {
    return this.authSerivce.logout(response);
  }
}
