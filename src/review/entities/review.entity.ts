
import { Ticket } from '../../ticket/entities/ticket.entity'

export class Review {
  id: number
  title: string
  content: string
  ticket?: Ticket
  ticketId: number
  userId: number
  creationDate: Date
  rating: number
}
