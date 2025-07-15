import {z} from "zod";

const VehicleType = z.enum([
  "Hatchback",
  "Bus",
  "SUVs",
  "Motorcycle",
  "Trucks",
  "Station Wagon",
  "Campers",
  "Boats",
  "Others"
]);


const FleetSize = z.enum(["1-10", "11-50", "51-100", "101-500", "500+"]);


export const fleetCareProSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(100, "Business name is too long"),
  address: z.string().min(1, "Address is required").max(200, "Address is too long"),
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  vehicleType: VehicleType,
  fleetSize: FleetSize,
  isComplete: z.boolean().optional().default(false),
});

export type IFleetCarePro = z.infer<typeof fleetCareProSchema>;
