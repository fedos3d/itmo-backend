import { Injectable } from '@nestjs/common'

@Injectable()
export class CarrierService {
  getHello (): string {
    return 'Hello World!'
  }
}
