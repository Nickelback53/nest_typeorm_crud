import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/entity/cats.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nickelback53.synology.me',
      port: 53307,
      username: 'taeho0523',
      password: 'LLee1219!!',
      database: 'test_db',
      entities: [Cat],
      synchronize: true,
    }),
    CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
