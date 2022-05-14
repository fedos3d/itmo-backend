
import { Ticket } from '../../ticket/entities/ticket.entity'

export class Carrier {
  id: number
  name: string
  supportEmail: string
  ticket?: Ticket[]
  rating: number
}
