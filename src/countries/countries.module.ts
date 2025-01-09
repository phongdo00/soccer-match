// src/countries/countries.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CountrySchema } from './schemas/countries.schema';

@Module({
  imports: [
    // Register the Country schema with Mongoose
    MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }]),
  ],
  controllers: [CountriesController], // Register the controller
  providers: [CountriesService], // Register the service
})
export class CountriesModule {}
