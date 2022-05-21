import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { PrismaService } from "./prisma.service";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { NotFoundExceptionFilter } from "./filters/NotFound.filter";
import { BadRequestExceptionFilter } from "./filters/BadRequest.filter";
import { ForbiddenExceptionFilter } from "./filters/Forbbiden.filter";

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("Сервис билетов")
    .setDescription("Описание API для Tickets")
    .setVersion("1.0")
    .addCookieAuth("auth_token")
    .addTag("tickets")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.useGlobalFilters(
    new BadRequestExceptionFilter(),
    new ForbiddenExceptionFilter(),
    new NotFoundExceptionFilter()
  );

  const cookieParser = require("cookie-parser");
  app.use(cookieParser());

  // Two lines below are responsible for pug template
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("pug");

  await app.listen(port);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
