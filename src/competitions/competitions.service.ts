import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Competition } from './schemas/competition.schema';

@Injectable()
export class CompetitionsService {
  constructor(
    @InjectModel('Competition') private readonly competitionModel: Model<Competition>,
  ) {}

  // Create a new competition
  async create(createCompetitionDto: { name: string; logo: string }): Promise<Competition> {
    const createdCompetition = new this.competitionModel(createCompetitionDto);
    return createdCompetition.save();
  }

  // Get all competitions
  async findAll(): Promise<Competition[]> {
    return this.competitionModel.find().exec();
  }

  // Get a single competition by ID
  async findOne(id: string): Promise<Competition | null> {
    return this.competitionModel.findById(id).exec();
  }

  // Update competition by ID
  async update(id: string, updateCompetitionDto: { name?: string; logo?: string }): Promise<Competition | null> {
    return this.competitionModel.findByIdAndUpdate(id, updateCompetitionDto, { new: true }).exec();
  }

  // Delete competition by ID
  async delete(id: string): Promise<Competition | null> {
    return this.competitionModel.findByIdAndDelete(id).exec();
  }
}
