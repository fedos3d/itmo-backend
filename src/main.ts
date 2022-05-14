import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { PrismaService } from "./prisma.service";

async function bootstrap() {
  var port = process.env.PORT || 3000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"));

  //Two lines below are responsible for pug template
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("pug");

  await app.listen(port);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
