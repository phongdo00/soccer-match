// src/countries/countries.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './schemas/countries.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel('Country') private readonly countryModel: Model<Country>,
  ) {}

  // Create a new country
  async create(createCountryDto: { name: string; logo: string }): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }

  // Find all countries
  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  // Find a country by id
  async findOne(id: string): Promise<Country | null> {
    return this.countryModel.findById(id).exec();
  }

  // Update a country by id
  async update(id: string, updateCountryDto: { name?: string; logo?: string }): Promise<Country | null> {
    return this.countryModel.findOneAndUpdate({ id }, updateCountryDto, { new: true }).exec();
  }

  // Delete a country by id
  async delete(id: string): Promise<Country | null> {
    return this.countryModel.findByIdAndDelete(id).exec();
  }
}
