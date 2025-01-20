import { NextResponse } from "next/server";
import { connectToDb } from "../../../../../lib/connect";
import { getAuthUrl } from "../../../../../lib/googleapis";

export async function GET(req: Request) {
  try {
    await connectToDb();

    return NextResponse.redirect(getAuthUrl());
  } catch (error) {
    console.error("Error fetching code:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to fetch code" }, { status: 500 });
  }
}
