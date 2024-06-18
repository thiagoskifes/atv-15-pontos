import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
