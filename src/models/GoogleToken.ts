import mongoose, { Schema, Document } from 'mongoose';

// Interface for the token document
export interface IGoogleToken extends Document {
  userId: string;
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expiry_date: number;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const GoogleTokenSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  access_token: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  token_type: {
    type: String,
    default: 'Bearer'
  },
  expiry_date: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Utility methods for the schema
GoogleTokenSchema.methods.isExpired = function(): boolean {
  return Date.now() >= this.expiry_date;
};

// Create the model
export const GoogleToken = mongoose.models.GoogleToken || mongoose.model<IGoogleToken>('GoogleToken', GoogleTokenSchema);
