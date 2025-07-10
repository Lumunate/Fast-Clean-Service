import { z } from 'zod';

export const vehicleOptionValidation = z.object({
  basePrice: z.number(),
  additionalCost: z.number(),
  additionalTime: z.number(),
  notes: z.string().optional(),
});

const translatedStringValidation = z.object({
  nl: z.string(),
  en: z.string().optional(),
});

export const subscriptionPackageValidation = z.object({
  id: z.string(),
  name: translatedStringValidation,
  packages: z.array(translatedStringValidation),
  description: translatedStringValidation,
  totalDuration: z.string(),
  duration: z.string(),
  price: z.string(),
  vehicleOptions: z.record(z.string(), vehicleOptionValidation),
  additionalOptions: z.array(z.any()).default([]),
  durationOptions: z.array(z.any()).default([]),
  cleaningFrequencyOptions: z.array(z.any()).default([])
});

export type SubscriptionPackage = z.infer<typeof subscriptionPackageValidation>;