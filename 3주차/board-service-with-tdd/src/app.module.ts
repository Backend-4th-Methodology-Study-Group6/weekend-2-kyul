import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UserModule, BoardModule],
})
export class AppModule {}
