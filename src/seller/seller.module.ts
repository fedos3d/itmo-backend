import { Module } from '@nestjs/common';
import { SellerController } from "./seller.controller";
import { SellerService } from "./seller.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [SellerController],
  imports: [AuthModule],
  providers: [SellerService]
})
export class SellerModule {}
