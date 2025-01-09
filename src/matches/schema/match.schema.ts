import { Schema, Document } from 'mongoose';

// Define the Mongoose Schema for Match
export const MatchSchema = new Schema({
  id: { type: String, required: true, unique: true }, // uuid as string
  competition_id: { type: String, required: true },
  home_team_id: { type: String, required: true },
  away_team_id: { type: String, required: true },
  status_id: { type: Number, required: true },
  match_time: { type: Number, required: true }, // timestamp
  home_scores: { type: [Number], default: [] }, // Array of numbers
  away_scores: { type: [Number], default: [] }, // Array of numbers
});

// Define the document interface to include Mongoose's Document type
export interface Match extends Document {
  id: string;
  competition_id: string;
  home_team_id: string;
  away_team_id: string;
  status_id: number;
  match_time: number;
  home_scores: number[];
  away_scores: number[];
}
