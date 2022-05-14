import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { Carrier, Prisma, Review } from '@prisma/client'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ReviewService {
  constructor (private dbService: PrismaService) {}

  async getReview (id: Prisma.ReviewWhereUniqueInput): Promise<Review | null> {
    const review = await this.dbService.review.count({
      where: id
    })
    if (review == 0) {
      throw new NotFoundException('Carrier not found')
    }
    const user = this.dbService.review.findUnique({
      where: id
    })
    return user
  }

  async addReview (data: Prisma.ReviewCreateInput): Promise<Review> {
    if (!data.title || !data.content || !data.userId || !data.rating) {
      throw new BadRequestException('All the parameters must be initialized')
    }
    return this.dbService.review.create({
      data
    })
  }

  async deleteReview (id: Prisma.ReviewWhereUniqueInput): Promise<Review> {
    const review = await this.dbService.review.count({
      where: id
    })
    if (review == 0) {
      throw new NotFoundException('Carrier not found')
    }
    return this.dbService.review.delete({
      where: id
    })
  }

  async getAllReviews (): Promise<Review[] | null> {
    const user = this.dbService.review.findMany()
    return user
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
