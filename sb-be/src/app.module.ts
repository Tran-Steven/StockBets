import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { StockService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [HttpModule],
  providers: [StockService],
})
export class AppModule {}
