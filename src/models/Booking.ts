// models/Booking.ts
import mongoose, { Document, Schema } from "mongoose";
import { LicensePlateData } from "../types/rdw";

interface ILockTime {
  start: Date;
  end: Date;
}

export interface IPayment {
  status: 'PENDING' | 'PAID' | 'FAILED';
  provider: 'stripe' | 'coinbase' | null;
  sessionId: string | null;
  lastUpdated: Date | null;
}

 export interface Addon {
  _id: string;
  name: {
    en: string;
    nl: string;
    [key: string]: string;
  };
  additionalCost: number | string;
  additionalTime?: number;
  options?: string[];
}

export interface IBooking extends Document {
  firstName: string;
  surname: string;
  companyName?: string;
  licensePlate?: string,
  street?: string;
  zipCode?: string;
  city?: string;
  calendarEventId?: string;
  email: string;
  phoneNumber: string;
  vehicleMakeAndModel: string;
  vehicleType: string;
  message?: string;
  serviceName: string;
  packageType: any;
  packageName: string;
  appointmentTimestamp: Date;
  appointmentEndTimestamp: Date;
  price: number;
  duration: number;
  travelDistance?: number;
  travelDuration?: number;
  travelCost?: number;
  type: "Onsite" | "Remote";
  vehicleDetails?: LicensePlateData | undefined | null;
  serviceAddons: {
    addons: Addon[];
    detailing: Addon[];
  };
  postCleanAction: 'Rental car' | 'Loan bike' | 'Wait at the branch' | 'None of the above';
  lockTime: ILockTime;
  bookingStatus: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  payment: IPayment;
}

const AddonSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: {
    en: { type: String, required: true },
    nl: { type: String, required: true },
  },
  additionalCost: { type: mongoose.Schema.Types.Mixed, required: true },
  additionalTime: { type: Number },
  options: { type: [String], default: [] },
}, { _id: false });

const bookingSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  companyName: String,
  licensePlate: String,
  street: String,
  zipCode: String,
  city: String,
  vehicleType: String,
  calendarEventId: { type: String, required: false },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  vehicleMakeAndModel: { type: String, required: true },
  message: String,
  serviceName: { type: String, required: true },
  packageType: { type: String, required: true },
  packageName: { type: String, required: true },
  appointmentTimestamp: { type: Date, required: true },
  appointmentEndTimestamp: { type: Date, required: true },
  vehicleDetails: { type: Object, required: false },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  travelDuration: { type: Number, default: null },
  travelCost: { type: Number, default: null },
  type: {
    type: String,
    enum: ["Onsite", "Remote"],
    required: true,
    default: "Onsite",
  },
  postCleanAction: {
    type: String,
    enum: ['Rental car', 'Loan bike', 'Wait at the branch', 'None of the above'],
    default: 'None of the above',
  },
  serviceAddons: {
  addons: { type: [AddonSchema], default: [] },
  detailing: { type: [AddonSchema], default: [] },
},
  lockTime: {
    start: { type: Date, default: null },
    end: { type: Date, required: true },
  },
  bookingStatus: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'CANCELLED'],
    default: 'PENDING',
  },
  payment: {
    status: {
      type: String,
      enum: ['PENDING', 'PAID', 'FAILED'],
      default: 'PENDING',
    },
    provider: {
      type: String,
      enum: ['stripe', 'coinbase', null],
      default: null,
    },
    sessionId: { type: String, default: null },       // Stripe session.id or Coinbase charge code
    lastUpdated: { type: Date, default: null },
  },
});

export default mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", bookingSchema);
