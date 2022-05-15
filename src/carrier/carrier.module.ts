import { Module } from "@nestjs/common";
import { CarrierController } from "./carrier.controller";
import { CarrierService } from "./carrier.service";
import { PrismaService } from "../prisma.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [CarrierController],
  providers: [CarrierService, PrismaService],
})
export class CarrierModule {}
