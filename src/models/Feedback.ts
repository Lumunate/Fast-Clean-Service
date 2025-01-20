import { Schema, model, models, Model } from 'mongoose';

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  Service: {
    type: String,
    required: true,
  },
  Appointment: {
    type: Date,
    required: false,
  },
  experience: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export const Feedback = models.Feedback || model('Feedback', feedbackSchema);
