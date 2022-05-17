import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async addUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.dbService.user.create({
      data,
    });
  }

  async updateUser(
    id: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  ): Promise<User | null> {
    const seller = await this.dbService.user.count({
      where: id,
    });
    if (seller == 0) {
      throw new NotFoundException("User not found");
    }
    const user = this.dbService.user.update({
      where: id,
      data,
    });
    return user;
  }

  async deleteUser(id: Prisma.UserWhereUniqueInput): Promise<User> {
    const carrier = await this.dbService.user.count({
      where: id,
    });
    if (carrier == 0) {
      throw new NotFoundException("User not found");
    }
    return this.dbService.user.delete({
      where: id,
    });
  }
}
