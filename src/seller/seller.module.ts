import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";
import { SellerService } from "./seller.service";
import { PrismaService } from "../prisma.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [SellerController],
  providers: [SellerService, PrismaService],
})
export class SellerModule {}
