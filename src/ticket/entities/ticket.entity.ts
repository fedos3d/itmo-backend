
import {Carrier} from '../../carrier/entities/carrier.entity'
import {Seller} from '../../seller/entities/seller.entity'
import {Transport} from '../../transport/entities/transport.entity'
import {User} from '../../user/entities/user.entity'
import {Review} from '../../review/entities/review.entity'


export class Ticket {
  id: number ;
from: string ;
to: string ;
company?: Carrier ;
seller?: Seller ;
transport?: Transport ;
price: number ;
User?: User  | null;
userId: number  | null;
transportId: number ;
Review?: Review[] ;
carrierId: number ;
sellerId: number ;
}
