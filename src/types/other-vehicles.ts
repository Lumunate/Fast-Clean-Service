import { z } from "zod";

// match the keys from your JSON vehicle_type.options
const VehicleType = z.enum([
    "bicycle",
    "scooter",
    "motorcycle",
    "camper",
    "caravan",
    "boat",
    "truck",
    "airplane"
]);

export const otherVehiclesSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name is too long"),

    email: z
        .string()
        .email("Invalid email address"),

    phone: z
        .string()
        .refine(val => /^\d{10}$/.test(val), {
            message: "Phone number must be exactly 10 digits"
        }),

    vehicleType: VehicleType,

    serviceType: z.enum([
        "one_time_your_location",
        "one_time_our_location",
        "subscription"
    ]),

    location: z.enum([
        "onsite",
        "your_place"
    ]),

    address: z.string().optional(),

    numVehicles: z
        .string()
        .refine(val => {
            const n = parseInt(val, 10);
            return !isNaN(n) && n >= 1 && n <= 500;
        }, {
            message: "Number of vehicles must be between 1 and 500"
        }),

    desiredServices: z
        .string()
        .min(1, "Please specify your desired services")
})
    .superRefine((data, ctx) => {
        // if they chose “your_place”, address must be present and non-empty
        if (data.location === "your_place") {
            if (!data.address || data.address.trim() === "") {
                ctx.addIssue({
                    path: ["address"],
                    code: z.ZodIssueCode.custom,
                    message: "Address is required when location is 'Your Place'",
                });
            }
        }
    });

export type IOtherVehicles = z.infer<typeof otherVehiclesSchema>;
