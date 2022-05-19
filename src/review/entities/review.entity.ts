
import { Ticket } from '../../ticket/entities/ticket.entity'
import { User } from '../../user/entities/user.entity'

export class Review {
  id: number
  title: string
  content: string
  ticket?: Ticket
  user?: User
  ticketId: number
  userId: number
  creationDate: Date
  rating: number
}
