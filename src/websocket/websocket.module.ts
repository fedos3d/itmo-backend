import { Module } from "@nestjs/common";
import { MessageService } from "./websocket.service";
import { PrismaService } from "../prisma.service";

@Module({
  providers: [MessageService, PrismaService],
  exports: [MessageService],
})
export class MessageModule {}
