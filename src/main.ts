import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { PrismaService } from "./prisma.service";
import * as session from 'express-session';

async function bootstrap() {

  var port = process.env.PORT || 3000;
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  await app.listen(port);

  const prismaService = app.get<PrismaService>(PrismaService);
  await prismaService.enableShutdownHooks(app)

}
bootstrap();
