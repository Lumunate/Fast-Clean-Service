import {z} from "zod";

const VehicleType = z.enum(["Bikes (all types)", "Trucks", "Campers", "Boats"]);

export const otherVehiclesSchema = z.object({
  address: z.string().max(200, "Address is too long").optional(),
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
  serviceType: z.enum(["Anywhere AutoCare", "FleetCare Pro"]),
  location: z.enum(["Onsite", "Your Place"]),
  vehicleType: VehicleType,
  numVehicles: z
    .string()
    .min(1)
    .refine(
      (val) => {
        const num = parseInt(val);
        return num >= 1 && num <= 500;
      },
      { message: "Fleet size must be between 1 and 500" }
    ),
});

export type IOtherVehicles = z.infer<typeof otherVehiclesSchema>;
