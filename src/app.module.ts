import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {User} from "./entities/user.entity";
import { Language } from "./entities/language.entity";
import { LanguageGroup} from "./entities/language_group.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'jzaqhytmuebkkm',
      password: 'e9b118200d5ea9523eda18c23a3531625f78e8893b701b78f4314b80e4c6934f',
      database: 'd6o3h81768979a',
      entities: [User, Language, LanguageGroup],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
