import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Carrier, Prisma, User } from "@prisma/client";

@Injectable()
export class CarrierService {
  constructor(private dbService: PrismaService) {}

  async getCarrier(id: Prisma.CarrierWhereUniqueInput): Promise<Carrier | null> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Carrier not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const user = this.dbService.carrier.findUnique({
      where: id
    })
    return user;
  }

  async getAllCarriers(): Promise<Carrier[] | null> {
    const user = this.dbService.carrier.findMany()
    return user;
  }

  async updateCarrier(id: Prisma.CarrierWhereUniqueInput, data: Prisma.CarrierUpdateInput ): Promise<Carrier | null> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Carrier not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const user = this.dbService.carrier.update({
      where: id,
      data: data
    })
    return user;
  }

  async createCarrier(data: Prisma.CarrierCreateInput): Promise<Carrier> {
    if (!data.name || !data.supportEmail || !data.rating) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'All the parameters must be initialized',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.dbService.carrier.create({
      data,
    })
  }


  async deleteCarrier(id: Prisma.UserWhereUniqueInput): Promise<Carrier> {
    const carrier = await this.dbService.carrier.count({
      where: id
    })
    if (carrier == 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Carrier not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return this.dbService.carrier.delete({
      where: id,
    });
  }
}