import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { Prisma, Seller, Ticket } from '@prisma/client'
import { PrismaService } from '../prisma.service'

@Injectable()
export class TicketsService {
  constructor (private dbService: PrismaService) {}
  async getTicket (id: Prisma.TicketWhereUniqueInput): Promise<Ticket | null> {
    const review = await this.dbService.ticket.count({
      where: id
    })
    if (review == 0) {
      throw new NotFoundException('Seller not found')
    }
    const user = this.dbService.ticket.findUnique({
      where: id
    })
    return user
  }

  async addTicket (data: Prisma.TicketCreateInput): Promise<Ticket> {
    if (!data.from || !data.to || !data.price) {
      throw new BadRequestException('All the parameters must be initialized')
    }
    return this.dbService.ticket.create({
      data
    })
  }

  async updateTicket (
    id: Prisma.TicketWhereUniqueInput,
    data: Prisma.TicketUpdateInput
  ): Promise<Ticket | null> {
    const seller = await this.dbService.ticket.count({
      where: id
    })
    if (seller == 0) {
      throw new NotFoundException('Ticket not found')
    }
    const user = this.dbService.ticket.update({
      where: id,
      data
    })
    return user
  }

  async getAllTickets (): Promise<Ticket[] | null> {
    const user = this.dbService.ticket.findMany()
    return user
  }
}
