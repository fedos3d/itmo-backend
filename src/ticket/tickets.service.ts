import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma, Ticket } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@Injectable()
export class TicketsService {
  constructor(private dbService: PrismaService) {}
  async getTicket(id: Prisma.TicketWhereUniqueInput): Promise<Ticket | null> {
    const review = await this.dbService.ticket.count({
      where: id,
    });
    if (review == 0) {
      throw new NotFoundException("Ticket not found");
    }
    const user = this.dbService.ticket.findUnique({
      where: id,
    });
    return user;
  }

  async addTicket(data: CreateTicketDto): Promise<Ticket> {
    const checkseller = await this.dbService.seller.count({
      where: { id: data.sellerId },
    });
    if (checkseller == 0) {
      throw new BadRequestException("Seller not found");
    }
    const checktransport = await this.dbService.transport.count({
      where: { id: data.transportId },
    });
    if (checktransport == 0) {
      throw new BadRequestException("Transport not found");
    }
    const checkCarrier = await this.dbService.carrier.count({
      where: { id: data.carrierId },
    });
    if (checkCarrier == 0) {
      throw new BadRequestException("Carrier not found");
    }
    return this.dbService.ticket.create({
      data: {
        company: { connect: { id: data.carrierId } },
        seller: { connect: { id: data.sellerId } },
        transport: { connect: { id: data.transportId } },
        price: data.price,
        from: data.from,
        to: data.to,
      },
    });
  }

  async updateTicket(
    id: Prisma.TicketWhereUniqueInput,
    data: Prisma.TicketUpdateInput
  ): Promise<Ticket | null> {
    const seller = await this.dbService.ticket.count({
      where: id,
    });
    if (seller == 0) {
      throw new NotFoundException("Ticket not found");
    }
    const user = this.dbService.ticket.update({
      where: id,
      data,
    });
    return user;
  }

  async getAllTickets(): Promise<Ticket[] | null> {
    const user = this.dbService.ticket.findMany();
    return user;
  }
}
