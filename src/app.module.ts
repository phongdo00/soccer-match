import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017/soccer_db?authSource=admin'),
    CountriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
