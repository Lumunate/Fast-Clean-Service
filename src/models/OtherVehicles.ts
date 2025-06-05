import mongoose, {Document, Schema} from "mongoose";
import {IOtherVehicles} from "../types/other-vehicles";

export interface IVehicleService extends IOtherVehicles, Document {
  createdAt: Date;
}

const OtherVehiclesSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String,
  default: '' },
  email: { type: String, required: true },
  vehicleType: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  location: { type: String, required: true },
  numVehicles: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const OtherVehicles =
  mongoose.models.OtherVehicles || mongoose.model<IVehicleService>("OtherVehicles", OtherVehiclesSchema);
