import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { Carrier, Prisma, User } from "@prisma/client";

@Injectable()
export class CarrierService {
  constructor(private dbService: PrismaService) {}

  async getCarrier(id: Prisma.CarrierWhereUniqueInput): Promise<Carrier | null> {
    const user = this.dbService.carrier.findUnique({
      where: id
    })
    return user;
  }

  async getAllCarriers(): Promise<Carrier[] | null> {
    const user = this.dbService.carrier.findMany()
    return user;
  }

  // async updateCarrier(id: Prisma.CarrierWhereUniqueInput): Promise<Carrier | null> {
  //   const user = this.dbService.carrier.update({
  //     where: id
  //   })
  //   return user;
  // }

  async createCarrier(data: Prisma.CarrierCreateInput): Promise<Carrier> {
    return this.dbService.carrier.create({
      data,
    })
  }


  async deleteCarrier(where: Prisma.UserWhereUniqueInput): Promise<Carrier> {
    return this.dbService.carrier.delete({
      where,
    });
  }
}