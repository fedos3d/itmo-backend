import { Module } from '@nestjs/common';
import { UserController } from "./user.contoller";
import { UserService } from "./user.service";
import { PrismaService } from "../prisma.service";


@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
