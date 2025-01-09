import { Schema, Document } from 'mongoose';

// Define the Competition schema
export const CompetitionSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically include createdAt and updatedAt fields
  },
);

// Define the Competition interface (type) for the document
export interface Competition extends Document {
  id: string; // MongoDB generates _id, but we want to access it as id
  name: string;
  logo: string;
}
