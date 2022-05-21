import { Module } from "@nestjs/common";
import { WebSocketService } from "./websocket.service";
import { PrismaService } from "../prisma.service";

@Module({
  providers: [WebSocketService, PrismaService],
  exports: [WebSocketService],
})
export class WebSocketModule {}
