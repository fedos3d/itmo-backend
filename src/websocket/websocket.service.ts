import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MessageEntity } from './message.entity'
import { Repository } from 'typeorm'
import { PrismaService } from '../prisma.service'

@Injectable()
export class WebSocketService {
  constructor (private readonly dbService: PrismaService) {}

  async save (author: string, data: string, date: string) {
    const message = new MessageEntity()
    message.author = author
    message.message = data
    message.date = date

    console.log(author)
    console.log(data)
    console.log(date)
    await this.dbService.message.create({
      data: {
        author,
        message: data
      }
    })
  }

  async getLastTwenty () {
    return await this.dbService.message.findMany()
  }
}
