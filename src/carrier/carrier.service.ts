import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Carrier, Prisma } from '@prisma/client'

@Injectable()
export class CarrierService {
  constructor (private dbService: PrismaService) {}

  async getCarrier (
    id: Prisma.CarrierWhereUniqueInput
  ): Promise<Carrier | null> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new NotFoundException('Carrier not found')
    }
    const user = this.dbService.carrier.findUnique({
      where: id
    })
    return user
  }

  async getAllCarriers (
    take: number = 10,
    skip: number = 0
  ): Promise<Carrier[] | null> {
    const user = this.dbService.carrier.findMany({ skip, take })
    return user
  }

  async updateCarrier (
    id: Prisma.CarrierWhereUniqueInput,
    data: Prisma.CarrierUpdateInput
  ): Promise<Carrier | null> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new NotFoundException('Carrier not found')
    }
    const user = this.dbService.carrier.update({
      where: id,
      data
    })
    return user
  }

  async createCarrier (data: Prisma.CarrierCreateInput): Promise<Carrier> {
    // if (!data.name || !data.supportEmail) {
    //   throw new BadRequestException('All the parameters must be initialized')
    // }
    return this.dbService.carrier.create({
      data
    })
  }

  async deleteCarrier (id: Prisma.UserWhereUniqueInput): Promise<Carrier> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new NotFoundException('Carrier not found')
    }
    return this.dbService.carrier.delete({
      where: id
    })
  }
}
