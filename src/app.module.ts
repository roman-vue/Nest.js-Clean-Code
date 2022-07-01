import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controllers/book.controller';
import { BookFactoryService } from './use-cases/book/book-factory.service';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BookUseCasesModule, BookFactoryService],
})
export class AppModule {}
