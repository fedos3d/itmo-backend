import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma.service";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService,
              private prismaService: PrismaService) {}

  async validateUser(data: Prisma.UserWhereInput): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: data
    });
    if (user && bcrypt.compare(user.password, await bcrypt.hash(data.password, parseInt(process.env.BCRYPT_ROUNDS)))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException({
      message: "Неправильный логин или пароль",
    });
  }

  async login(data: Prisma.UserWhereInput, response) {
    const payload = await this.validateUser(data);
    response.cookie("authorization_token", this.jwtService.sign(payload));
  }

  async register(user: Prisma.UserCreateInput, response) {
    const dbUser = await this.prismaService.user.findFirst({
      where: {
        name: user.name
      }
      }
    );
    if (dbUser) {
      throw new UnauthorizedException("This username is already taken!");
    }
    const hashedPassword = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_ROUNDS));
    const newUser = await this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        creationDate: null
      }
    });
    const { password, ...payload } = newUser;
    response.cookie("authorization_token", this.jwtService.sign(payload));
  }

  logout(response) {
    response.cookie("authorization_token", "");
  }
}
