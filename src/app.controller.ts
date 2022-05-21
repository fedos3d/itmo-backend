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
import { Response } from "express";
import { AuthenticationInterceptor } from "./auth.intereptor";
import { AuthGuard } from "./auth/auth.guard";
import { WebSocketService } from "./websocket/websocket.service";
import { CarrierService } from "./carrier/carrier.service";
import { CreateCarrierDto } from "./carrier/dto/create-carrier.dto";
import { Carrier } from "@prisma/client";

@ApiExcludeController()
@UseInterceptors(BackendResponseTimeInterceptor, AuthenticationInterceptor)
@Controller()
@Controller()
export class AppController {
  constructor(
    private readonly carrierSerivce: CarrierService,
    private readonly appService: AppService,
    private readonly authSerivce: AuthService,
    private readonly messageService: WebSocketService
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
  @Redirect("/")
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

  @Get("chat")
  @Render("chat")
  async chat() {
    return {
      title: "Chat",
      messages: await this.messageService.getMessages(),
    };
  }

  @Get("/add_carrier")
  @Render("add_carrier")
  getAddCarrier() {
    return {};
  }

  @Post("add_carrier")
  @Redirect("/add_carrier")
  async addCarrier(@Body() dto: CreateCarrierDto): Promise<Carrier> {
    console.log();
    return this.carrierSerivce.createCarrier(dto);
  }
}
