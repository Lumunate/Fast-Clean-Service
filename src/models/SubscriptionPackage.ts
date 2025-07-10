import mongoose, { Schema } from "mongoose";

export const translatedString = {
    nl: { type: String, required: true },
    en: { type: String, default: "" },
};

export const vehicleOptionSchema = new Schema(
  {
    basePrice: { type: Number, required: true },
    additionalCost: { type: Number, required: true },
    additionalTime: { type: Number, required: true },
    notes: { type: String },
  },
  { _id: false }
);

const subscriptionPackageSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: translatedString,
      required: true,
    },
    packages: [
      {
        type: translatedString,
        required: true,
      },
    ],
    description: {
      type: translatedString,
      required: true,
    },
    totalDuration: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    vehicleOptions: {
      type: Map,
      of: vehicleOptionSchema,
      required: true,
    },
    additionalOptions: {
      type: Array,
      default: [],
    },
    durationOptions: {
      type: Array,
      default: [],
    },
    cleaningFrequencyOptions: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    strict: false, // Allow fields not explicitly defined in the schema
  }
);

// Delete existing model if it exists to prevent OverwriteModelError
if (mongoose.models.SubscriptionPackage) {
  delete mongoose.models.SubscriptionPackage;
}

export const SubscriptionPackage = mongoose.model("SubscriptionPackage", subscriptionPackageSchema);
