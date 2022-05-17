import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Seller } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class SellerService {
  constructor(private dbService: PrismaService) {}
  async getSellser(id: Prisma.SellerWhereUniqueInput): Promise<Seller | null> {
    const review = await this.dbService.seller.count({
      where: id,
    });
    if (review == 0) {
      throw new NotFoundException("Seller not found");
    }
    const user = this.dbService.seller.findUnique({
      where: id,
    });
    return user;
  }

  async addSellser(data: Prisma.SellerCreateInput): Promise<Seller> {
    return this.dbService.seller.create({
      data,
    });
  }

  async deleteSeller(id: Prisma.SellerWhereUniqueInput): Promise<Seller> {
    const seller = await this.dbService.seller.count({
      where: id,
    });
    if (seller == 0) {
      throw new NotFoundException("Seller not found");
    }
    return this.dbService.seller.delete({
      where: id,
    });
  }

  async getAllSellers(): Promise<Seller[] | null> {
    const user = this.dbService.seller.findMany();
    return user;
  }

  async updateSellerr(
    id: Prisma.SellerWhereUniqueInput,
    data: Prisma.SellerUpdateInput
  ): Promise<Seller | null> {
    const seller = await this.dbService.seller.count({
      where: id,
    });
    if (seller == 0) {
      throw new NotFoundException("Seller not found");
    }
    const user = this.dbService.seller.update({
      where: id,
      data,
    });
    return user;
  }
}
