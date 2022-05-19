import { Injectable } from '@nestjs/common'

@Injectable()
export class TransportService {
  getHello (): string {
    return 'Hello World!'
  }
}
