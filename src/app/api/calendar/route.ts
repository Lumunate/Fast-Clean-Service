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

export async function POST(req: Request, res: Response) {
  try {
    const calendar = new GoogleCalendar();

    const data = await calendar.createEvent({
      summary: `Appointment - Test`,
      description: "Testing",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      attendees: [{ email: "fizoneechan@gmail.com" }, { email: "faizanknight5@gmail.com" }],
      location: `Testing Land`,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "An error occurred while making events." });
  }
}
