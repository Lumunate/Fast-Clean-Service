import mongoose from "mongoose";
import { translatedString, vehicleOptionSchema } from "./SubscriptionPackage";

const optionSchema = new mongoose.Schema({
  name: translatedString,
  additionalCost: mongoose.Schema.Types.Mixed,
  available: Boolean,
  options: [String],
});

const additionalOptionsSchema = new mongoose.Schema({
  interior: [optionSchema],
  exterior: [optionSchema],
  detailing: [optionSchema],
});

const durationOptionSchema = new mongoose.Schema({
  duration: String,
  additionalCost: Number,
});

const cleaningFrequencyOptionSchema = new mongoose.Schema({
  frequency: String,
  additionalCost: Number,
});

const packageSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: translatedString,
  packages:     [{
    nl: { type: String, required: true },
    en: { type: String, default: "" },
  }],
  totalDuration: String,
  duration: String,
  price: String,
  vehicleOptions: {
    type: Map,
    of: vehicleOptionSchema,
  },
  additionalOptions: additionalOptionsSchema,
  durationOptions: [durationOptionSchema],
  cleaningFrequencyOptions: [cleaningFrequencyOptionSchema],
});

// models/CarService.ts
const AutocareServiceSchema = new mongoose.Schema({
  standard: [packageSchema],
  deluxe: [packageSchema],
  premium: [packageSchema],
});

const optionsSchema = new mongoose.Schema({
  id: String,
  name: String,
  duration: String,
  price: String,
});

export const AutocareService = mongoose.models.AutocareService || mongoose.model("AutocareService", AutocareServiceSchema);
export const ServiceOptions = mongoose.models.ServiceOptions || mongoose.model("ServiceOptions", optionsSchema);
