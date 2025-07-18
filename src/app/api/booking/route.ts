import type { NextApiResponse } from "next";
import bookingService from "../../../services/booking";
import { IBooking } from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  success: boolean;
  data?: IBooking | IBooking[];
  message?: string;
};

export async function GET(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

  try {
    const bookings = await bookingService.getAllBookings();
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

  try {
    const booking = await bookingService.createBooking(await req.json());

    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const id = req.nextUrl.searchParams.get("id");

    const booking = await bookingService.editBooking(id, await req.json());
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const id = req.nextUrl.searchParams.get("id");

    const booking = await bookingService.deleteBooking(id);
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing booking ID" }, { status: 400 });
    }

    const updateData = await req.json(); // e.g., { bookingStatus: "COMPLETED" }
    console.log(3333, updateData);
    

    const updatedBooking = await bookingService.editBooking(id, updateData);

    return NextResponse.json({ success: true, data: updatedBooking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
