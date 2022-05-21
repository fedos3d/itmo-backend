import { Ticket } from "../../ticket/entities/ticket.entity";

export class Seller {
  id: number;
  name: string;
  url: string;
  ticket?: Ticket[];
  rating: number;
}
