import { Ticket } from '../../ticket/entities/ticket.entity'

export class User {
  id: number
  email: string
  ticket?: Ticket[]
  password: string
  name: string | null
  creationDate: Date
}
