
import {Ticket} from '../../ticket/entities/ticket.entity'
import {Review} from '../../review/entities/review.entity'


export class User {
  id: number ;
email: string ;
name: string  | null;
tickets?: Ticket[] ;
Review?: Review[] ;
}
