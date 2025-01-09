// src/countries/countries.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  // Create a new country
  @Post()
  async create(@Body() createCountryDto: { name: string; logo: string }) {
    return this.countriesService.create(createCountryDto);
  }

  // Get all countries
  @Get()
  async findAll() {
    return this.countriesService.findAll();
  }

  // Get a country by id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  // Update a country by id
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: { name?: string; logo?: string }) {
    return this.countriesService.update(id, updateCountryDto);
  }

  // Delete a country by id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.countriesService.delete(id);
  }
}
