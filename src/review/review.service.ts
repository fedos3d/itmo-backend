import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma, Review } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateReviewDto } from "./dto/create-review.dto";

@Injectable()
export class ReviewService {
  constructor(private dbService: PrismaService) {}

  async getReview(id: Prisma.ReviewWhereUniqueInput): Promise<Review | null> {
    const review = await this.dbService.review.count({
      where: id,
    });
    if (review == 0) {
      throw new NotFoundException("Carrier not found");
    }
    const user = this.dbService.review.findUnique({
      where: id,
    });
    return user;
  }

  async addReview(data: CreateReviewDto): Promise<Review> {
    const checkUser = await this.dbService.user.count({
      where: { id: data.userId },
    });
    if (checkUser == 0) {
      throw new BadRequestException("User not found");
    }
    const checkTicket = await this.dbService.ticket.count({
      where: { id: data.ticketId },
    });
    if (checkTicket == 0) {
      throw new BadRequestException("Ticket not found");
    }
    return this.dbService.review.create({
      data: {
        title: data.title,
        content: data.content,
        rating: data.rating,
        userId: data.userId,
        ticket: { connect: { id: data.ticketId } },
      },
    });
  }

  async deleteReview(id: Prisma.ReviewWhereUniqueInput): Promise<Review> {
    const review = await this.dbService.review.count({
      where: id,
    });
    if (review == 0) {
      throw new NotFoundException("Carrier not found");
    }
    return this.dbService.review.delete({
      where: id,
    });
  }

  async getAllReviews(): Promise<Review[] | null> {
    const user = this.dbService.review.findMany();
    return user;
  }
}
