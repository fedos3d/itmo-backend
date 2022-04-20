import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Carrier, Prisma, Review } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ReviewService {
  constructor(private dbService: PrismaService) {}

  async getReview(id: Prisma.ReviewWhereUniqueInput): Promise<Review | null> {
    const review = await this.dbService.review.count({
      where: id
    })
    if (review == 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Review not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const user = this.dbService.review.findUnique({
      where: id
    })
    return user;
  }

  // async addReview(data: Prisma.ReviewCreateInput): Promise<Carrier> {
  //   if (!data.title || !data.content || !data.creationDate || !data.) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.BAD_REQUEST,
  //         error: 'All the parameters must be initialized',
  //       },
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   return this.dbService.carrier.create({
  //     data,
  //   })
  // }
}