import { Render, Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { BackendResponseTimeInterceptor } from "./interceptor";

@UseInterceptors(BackendResponseTimeInterceptor)
@Controller()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
    return {
      title: "Конструктор",
      AdditionalHead: '<link href="constructor.css" rel="stylesheet">',
      AdditionalFooter: '<script src="scripts/constructor.js"></script>',
    };
  }

  @Get("fetch")
  @Render("fetch")
  get() {
    return {
      title: "Fetch API",
      AdditionalFooter: '<script src="scripts/fetch.js"></script>',
    };
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

  @Get("chat")
  @Render("chat")
  chat() {
    return { title: "Chat" };
  }
}
