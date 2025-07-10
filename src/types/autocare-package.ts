
import { z } from 'zod';
import { vehicleOptionValidation } from './subscripton-package';

const translatedString = z.object({
    nl: z.string(),
    en: z.string().optional().default(""),
});

const optionValidation = z.object({
  name: translatedString,
  additionalCost: z.union([z.number(), z.string()]),
  available: z.boolean().optional(),
  options: z.array(z.string())
});

const additionalOptionsValidation = z.object({
  interior: z.array(optionValidation).optional(),
  exterior: z.array(optionValidation).optional(),
  detailing: z.array(optionValidation).optional()
});

export const packageValidation = z.object({
  id: z.string(),
  name:  z.string(),
  description: translatedString.optional(),
  packages: z.array(translatedString),
  totalDuration: z.string(),
  duration: z.string(),
  price: z.string(),
  vehicleOptions: z.record(z.string(), vehicleOptionValidation),
  additionalOptions: additionalOptionsValidation,
  durationOptions: z.array(
    z.object({
      duration: z.string(),
      additionalCost: z.number()
    })
  ).optional(),
  cleaningFrequencyOptions: z.array(
    z.object({
      frequency: z.string(),
      additionalCost: z.number()
    })
  ).optional()
});

export const carServiceValidation = z.object({
  standard: z.array(packageValidation),
  deluxe: z.array(packageValidation),
  premium: z.array(packageValidation)
});

export const serviceOptionsValidation = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    duration: z.string(),
    price: z.string()
  })
);