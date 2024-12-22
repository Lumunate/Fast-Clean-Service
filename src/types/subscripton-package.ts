import { z } from 'zod';

export const vehicleOptionValidation = z.object({
  basePrice: z.number(),
  additionalPrice: z.number(),
  additionalTime: z.number(),
  notes: z.string().optional()
});

export const subscriptionPackageValidation = z.object({
  id: z.string(),
  name: z.string(),
  packages: z.array(z.string()),
  description: z.string(),
  totalDuration: z.string(),
  duration: z.string(),
  price: z.string(),
  vehicleOptions: z.record(z.string(), vehicleOptionValidation),
  additionalOptions: z.array(z.any()).default([]),
  durationOptions: z.array(z.any()).default([]),
  cleaningFrequencyOptions: z.array(z.any()).default([])
});

export type SubscriptionPackage = z.infer<typeof subscriptionPackageValidation>;