import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.service";
import { TicketsModule } from './tickets/tickets.module';
import { UserModule } from "./user/user.module";
import { SellerModule } from './seller/seller.module';
import { TransportModule } from './transport/transport.module';
import { CarrierModule } from './carrier/carrier.module';
import { ReviewModule } from './review/review.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [TicketsModule, UserModule, SellerModule, TransportModule, CarrierModule, ReviewModule],
})
export class AppModule {}

