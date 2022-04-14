import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { Prisma, User } from "@prisma/client";
import { UserNotFoundException } from "./userNotFound.exception";

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async getUser(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const user = this.dbService.user.findUnique({
      where: id
    })
    return user;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.dbService.user.create({
      data,
    })
  }


  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.dbService.user.delete({
      where,
    });
  }
}