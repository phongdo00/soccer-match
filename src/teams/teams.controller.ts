import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  // Create a new team
  @Post()
  async create(@Body() createTeamDto: { competition_id: string; country_id: string; name: string; logo: string }) {
    return this.teamsService.create(createTeamDto);
  }

  // Get all teams
  @Get()
  async findAll() {
    return this.teamsService.findAll();
  }

  // Get a single team by id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }

  // Get teams by competition_id
  @Get('competition/:competition_id')
  async findByCompetition(@Param('competition_id') competition_id: string) {
    return this.teamsService.findByCompetition(competition_id);
  }

  // Update a team by id
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTeamDto: { competition_id?: string; country_id?: string; name?: string; logo?: string }) {
    return this.teamsService.update(id, updateTeamDto);
  }

  // Delete a team by id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.teamsService.delete(id);
  }
}
