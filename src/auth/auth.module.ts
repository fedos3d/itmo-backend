import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "../user/user.service";
import { User } from "../user/entities/user.entity";
import { AuthController } from "./auth.contoller";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: "jwt",
      property: "user",
      session: false,
    }),
    JwtModule.register({
      secret: "secret-key",
      signOptions: {
        expiresIn: "1h",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService],
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}
