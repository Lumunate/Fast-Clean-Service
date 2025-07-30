// pages/api/contact.ts
import type {NextApiResponse} from "next";
import {z} from "zod";
import dbConnect from "../../../lib/dbConnect";
import {NextRequest, NextResponse} from "next/server";
import {otherVehiclesSchema} from "../../../types/other-vehicles";
import OtherVehiclesService from "../../../services/other-vehicles";
import { OtherVehicles } from "../../../models/OtherVehicles";

type ContactResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function GET() {
  await dbConnect();
  const all = await OtherVehicles.find().sort({ createdAt: -1 });
  return NextResponse.json({ data: all });
}

export async function DELETE(req: NextRequest) {
  await dbConnect();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  await OtherVehicles.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  await OtherVehicles.findByIdAndUpdate(id, { isComplete: true });
  return NextResponse.json({ message: "Marked complete" });
}

export async function POST(req: NextRequest, res: NextApiResponse<ContactResponse>) {
  await dbConnect();

  try {
    // Validate the request body
    const body = await req.json();
    const validatedData = otherVehiclesSchema.parse(body);

    // Use the service layer to handle the contact submission
    await OtherVehiclesService.submitBookingForm(validatedData);

    return NextResponse.json({ message: "Booking form submitted successfully" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}
