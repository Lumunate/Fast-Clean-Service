import { NextResponse } from "next/server";
import { GoogleCalendar } from "../../../repositories/google-calendar";

export async function GET(req: Request, res: Response) {
  try {
    const calendar = new GoogleCalendar();
    const events = await calendar.listEvents();

    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ error: "An error occurred while fetching events." });
  }
}

