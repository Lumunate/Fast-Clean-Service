import mongoose, { Schema } from "mongoose";

const PaymentsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Subscription: {
      billingCycle: {
        type: String,
        enum: ["monthly", "yearly"],
        required: false,
      },
      status: {
        type: String,
        enum: ["active", "pastDue"],
        required: false,
      },
      paymentMethod: {
        type: String,
        enum: ["coinbase", "stripe", "admin"],
        required: false,
      },
      packageId: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      nextBilledAt: {
        type: Date,
      },
      startDate: {
        type: Date,
        default: new Date(),
      },
      endDate: {
        type: Date || null,
      },
    },
    oneTimePayment: [
      {
        date: {
          type: Date,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        packageId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        status: {
          type: String,
          enum: ["Pending", "Paid"],
        },
      },
    ],
  },
  { timestamps: true }
);

const Payments = mongoose.models?.Payments || mongoose.model("Payments", PaymentsSchema);
export default Payments;
