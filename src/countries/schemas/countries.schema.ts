// src/countries/schemas/country.schema.ts
import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Country Schema definition
export const CountrySchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  {
    timestamps: true, // Optionally add createdAt and updatedAt timestamps
  },
);

// Interface for the Country model
export interface Country extends Document {
  id: string; // id will be a UUID string
  name: string;
  logo: string;
}
