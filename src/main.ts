import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { PrismaService } from './prisma.service'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as session from 'express-session'

async function bootstrap () {
  const port = process.env.PORT || 3000

  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, '..', 'public'))

  const config = new DocumentBuilder()
    .setTitle('Сервис билетов')
    .setDescription('Описание API для Tickets')
    .setVersion('1.0')
    .addTag('tickets')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // Two lines below are responsible for pug template
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('pug')

  await app.listen(port)

  const prismaService = app.get<PrismaService>(PrismaService)
  await prismaService.enableShutdownHooks(app)
}
bootstrap()
