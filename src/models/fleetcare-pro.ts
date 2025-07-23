import mongoose, { Document, Model } from "mongoose";
import { IFleetCarePro as IFleetCareProSchema } from "../types/fleetcare-pro";

interface IFleetCarePro extends Document, IFleetCareProSchema {
  createdAt: Date;
}

export const FleetCareProSchema = new mongoose.Schema<IFleetCarePro>({
  businessName: { type: String, required: true, maxlength: 100 },
  address: { type: String, required: true, maxlength: 200 },
  name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true },
  vehicleType: {
    type: String,
    required: true,
    enum: [
      "Hatchback",
      "Bus",
      "SUVs",
      "Motorcycle",
      "Trucks",
      "Station Wagon",
      "Campers",
      "Boats",
      "Others",
    ],
  },
  fleetSize: {
    type: String,
    required: true,
    enum: ["1-10", "11-50", "51-100", "101-500", "500+"],
  },
  isComplete: { type: Boolean, default: false, required: false },
  createdAt: { type: Date, default: Date.now },
});

export const FleetCarePro: Model<IFleetCarePro> =
  mongoose.models.FleetCarePro ||
  mongoose.model<IFleetCarePro>("FleetCarePro", FleetCareProSchema);
