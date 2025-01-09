import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match, MatchSchema } from './schema/match.schema';

@Injectable()
export class MatchesService {
  constructor(@InjectModel('Match') private matchModel: Model<Match>) {}

  // Create a new match
  async create(match: Match): Promise<Match> {
    const newMatch = new this.matchModel(match);
    return await newMatch.save();
  }

  // Get all matches
  async findAll(): Promise<Match[]> {
    return this.matchModel.find().exec();
  }

  // Find a match by its id
  async findOne(id: string): Promise<Match | null> {
    return this.matchModel.findOne({ id }).exec();
  }

  // Update match scores
  async updateScores(id: string, homeScores: number[], awayScores: number[]): Promise<Match | null> {
    return this.matchModel.findByIdAndUpdate(
      id,
      { home_scores: homeScores, away_scores: awayScores },
      { new: true }
    ).exec();
  }

  // Delete a match
  async remove(id: string): Promise<void> {
    await this.matchModel.findByIdAndDelete(id).exec();
  }
}
