import { Schema, model, Document } from 'mongoose';

export interface ICoupon extends Document {
  code: string;
  discountPercentage: number;
  validFrom: Date;
  validUntil: Date;
  isActive: boolean;
  maxUses: number;
  currentUses: number;
  createdAt: Date;
  updatedAt: Date;
}

const couponSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  validFrom: {
    type: Date,
    required: true
  },
  validUntil: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  maxUses: {
    type: Number,
    required: true,
    min: 1
  },
  currentUses: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const Coupon = model<ICoupon>('Coupon', couponSchema);
