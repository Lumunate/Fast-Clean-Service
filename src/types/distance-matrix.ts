import { z } from 'zod';

export const locationSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required")
});

export const distanceRequestSchema = z.object({
  origin: locationSchema,
  destination: locationSchema
});

export const distanceMatrixResponseSchema = z.object({
  status: z.string(),
  error_message: z.string().optional(),
  origin_addresses: z.array(z.string()),
  destination_addresses: z.array(z.string()),
  rows: z.array(
    z.object({
      elements: z.array(
        z.object({
          status: z.string(),
          distance: z
            .object({
              text: z.string(),
              value: z.number()
            })
            .optional(),
          duration: z
            .object({
              text: z.string(),
              value: z.number()
            })
            .optional()
        })
      )
    })
  )
});

export const distanceResponseSchema = z.object({
  distance: z.number(),
  duration: z.number(),
  status: z.enum(['OK', 'ZERO_RESULTS', 'ERROR']),
  error: z.string().optional()
});

// Type inference from schemas
export type Location = z.infer<typeof locationSchema>;
export type DistanceRequest = z.infer<typeof distanceRequestSchema>;
export type DistanceMatrixResponse = z.infer<typeof distanceMatrixResponseSchema>;
export type DistanceResponse = z.infer<typeof distanceResponseSchema>;