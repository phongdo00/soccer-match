import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './schemas/team.schema';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel('Team') private readonly teamModel: Model<Team>,
  ) {}

  // Create a new team
  async create(createTeamDto: { competition_id: string; country_id: string; name: string; logo: string }): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  // Get all teams
  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  // Get a single team by ID
  async findOne(id: string): Promise<Team | null> {
    return this.teamModel.findById(id).exec();
  }

  // Get teams by competition_id
  async findByCompetition(competition_id: string): Promise<Team[]> {
    return this.teamModel.find({ competition_id }).exec();
  }

  // Update a team by ID
  async update(id: string, updateTeamDto: { competition_id?: string; country_id?: string; name?: string; logo?: string }): Promise<Team | null> {
    return this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true }).exec();
  }

  // Delete a team by ID
  async delete(id: string): Promise<Team | null> {
    return this.teamModel.findByIdAndDelete(id).exec();
  }
}
