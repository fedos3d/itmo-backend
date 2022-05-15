import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { TicketsModule } from './ticket/tickets.module'
import { UserModule } from './user/user.module'
import { SellerModule } from './seller/seller.module'
import { TransportModule } from './transport/transport.module'
import { CarrierModule } from './carrier/carrier.module'
import { ReviewModule } from './review/review.module'
import { AuthModule } from './auth/auth.module'
import { WebSocketModule } from './websocket/websocket.module'
import { Gateway } from './websocket/gateway'

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService, Gateway],
  imports: [
    TicketsModule,
    UserModule,
    SellerModule,
    TransportModule,
    CarrierModule,
    ReviewModule,
    AuthModule,
    WebSocketModule
  ]
})
export class AppModule {}
