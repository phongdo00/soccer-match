import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from './schema/match.schema';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  // Create a new match
  @Post()
  async create(@Body() match: Match) {
    return this.matchesService.create(match);
  }

  // Get all matches
  @Get()
  async findAll() {
    return this.matchesService.findAll();
  }

  // Get a match by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.matchesService.findOne(id);
  }

  // Update match scores
  @Put(':id/scores')
  async updateScores(
    @Param('id') id: string,
    @Body('home_scores') homeScores: number[],
    @Body('away_scores') awayScores: number[],
  ) {
    return this.matchesService.updateScores(id, homeScores, awayScores);
  }

  // Delete a match
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.matchesService.remove(id);
  }
}
