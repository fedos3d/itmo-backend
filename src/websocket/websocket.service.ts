import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageEntity } from "./message.entity";
import { Repository } from "typeorm";
import { PrismaService } from "../prisma.service";

@Injectable()
export class MessageService {
  constructor(private readonly dbService: PrismaService) {}

  async save(author: string, data: string, date: string) {
    const message = new MessageEntity();
    message.author = author;
    message.message = data;
    message.date = date;

    this.dbService.message.create({
      data: {
        author: author,
        message: data,
      },
    });
  }

  async getLastTwenty() {
    return await this.dbService.message.findMany();
  }
}
