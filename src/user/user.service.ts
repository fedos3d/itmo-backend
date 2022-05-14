import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Prisma, Ticket, Transport, User } from '@prisma/client'

@Injectable()
export class UserService {
  constructor (private dbService: PrismaService) {}

  async getUser (id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    const review = await this.dbService.user.count({
      where: id
    })
    if (review == 0) {
      throw new NotFoundException('user not found')
    }
    const user = this.dbService.user.findUnique({
      where: id
    })
    return user
  }

  async addUser (data: Prisma.UserCreateInput): Promise<User> {
    if (!data.name || !data.email || !data.password) {
      throw new BadRequestException('All the parameters must be initialized')
    }
    return this.dbService.user.create({
      data
    })
  }

  async getAllUsers (): Promise<User[] | null> {
    const user = this.dbService.user.findMany()
    return user
  }

  async updateUser (
    id: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  ): Promise<User | null> {
    const seller = await this.dbService.user.count({
      where: id
    })
    if (seller == 0) {
      throw new NotFoundException('User not found')
    }
    const user = this.dbService.user.update({
      where: id,
      data
    })
    return user
  }

  async deleteUser (id: Prisma.UserWhereUniqueInput): Promise<User> {
    const carrier = await this.dbService.user.count({
      where: id
    })
    if (carrier == 0) {
      throw new NotFoundException('User not found')
    }
    return this.dbService.user.delete({
      where: id
    })
  }
}
