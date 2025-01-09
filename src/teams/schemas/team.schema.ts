import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Define the Team schema
export const TeamSchema = new Schema(
  {
    competition_id: { type: String, required: true }, // The competition the team belongs to
    country_id: { type: String, required: true },     // The country the team is from
    name: { type: String, required: true },            // Team name
    logo: { type: String, required: true },            // Team logo URL
  },
  {
    timestamps: true, // Automatically include createdAt and updatedAt fields
  },
);

// Define the Team interface (type) for the document
export interface Team extends Document {
  id: string;           // UUID identifier
  competition_id: string; // Competition ID
  country_id: string;    // Country ID
  name: string;           // Team name
  logo: string;           // Logo URL
}
