import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';

@Controller('competitions')
export class CompetitionsController {
  constructor(private readonly competitionsService: CompetitionsService) {}

  // Create a new competition
  @Post()
  async create(@Body() createCompetitionDto: { name: string; logo: string }) {
    return this.competitionsService.create(createCompetitionDto);
  }

  // Get all competitions
  @Get()
  async findAll() {
    return this.competitionsService.findAll();
  }

  // Get a competition by id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.competitionsService.findOne(id);
  }

  // Update a competition by id
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCompetitionDto: { name?: string; logo?: string }) {
    return this.competitionsService.update(id, updateCompetitionDto);
  }

  // Delete a competition by id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.competitionsService.delete(id);
  }
}
