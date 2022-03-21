import { Module } from '@nestjs/common';
import { AppController, AnotherController, MyAchievementsController, FetchController, ConstructorController  } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AnotherController, MyAchievementsController, FetchController, ConstructorController],
  providers: [AppService],
})
export class AppModule {}
