import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { AuthResponse } from "./auth.response";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) {}

  async validateUser(data: Prisma.UserWhereInput): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: data,
    });
    if (user && user.password == data.password) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException({
      message: "Неправильный логин или пароль",
    });
  }

  async login(data: Prisma.UserWhereInput, response): Promise<AuthResponse> {
    const payload = await this.validateUser(data);
    const token = this.jwtService.sign(payload);
    response.cookie("authorization_token", token);
    return {
      token: token,
      user: payload,
    };
  }

  async register(
    user: Prisma.UserCreateInput,
    response
  ): Promise<AuthResponse> {
    // const dbUser = await this.prismaService.user.findFirst({
    //   where: {
    //     name: user.name,
    //   },
    // });
    // // console.log(dbUser);
    // if (dbUser != null) {
    //   throw new UnauthorizedException("This username is already taken!");
    // }
    const hashedPassword = user.password;
    const newUser = await this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        creationDate: null,
      },
    });
    const { password, ...payload } = newUser;
    const token = this.jwtService.sign(payload);
    response.cookie("authorization_token", token);
    return {
      token: token,
      user: newUser,
    };
  }

  logout(response) {
    response.cookie("authorization_token", "");
  }
}
