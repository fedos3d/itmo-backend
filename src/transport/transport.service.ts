import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Transport } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class TransportService {
  constructor(private dbService: PrismaService) {}
  async getTransport(
    id: Prisma.TransportWhereUniqueInput
  ): Promise<Transport | null> {
    const review = await this.dbService.transport.count({
      where: id,
    });
    if (review == 0) {
      throw new NotFoundException("Transport not found");
    }
    const user = this.dbService.transport.findUnique({
      where: id,
    });
    return user;
  }

  async addTransport(data: Prisma.TransportCreateInput): Promise<Transport> {
    return this.dbService.transport.create({
      data,
    });
  }

  async getAllTransport(): Promise<Transport[] | null> {
    const user = this.dbService.transport.findMany();
    return user;
  }

  async deleteTranposrt(
    id: Prisma.TransportWhereUniqueInput
  ): Promise<Transport> {
    const carrier = await this.dbService.transport.count({
      where: id,
    });
    if (carrier == 0) {
      throw new NotFoundException("Carrier not found");
    }
    return this.dbService.transport.delete({
      where: id,
    });
  }
}
