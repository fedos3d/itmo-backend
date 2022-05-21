import { Ticket } from "../../ticket/entities/ticket.entity";

export class Transport {
  id: number;
  name: string;
  ticket?: Ticket[];
}
