import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.service";
import { TicketsModule } from './tickets/tickets.module';
import { UserModule } from "./User/user.module";

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [TicketsModule, UserModule],
})
export class AppModule {}

