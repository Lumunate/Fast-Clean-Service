import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "../../../lib/connect";
import { feedbackSchema } from "../../../types/feedback";
import { FeedbackService } from "../../../services/feedback";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const id = searchParams.get('id');

    const feedbackService = new FeedbackService();

    if (id) {
      const feedback = await feedbackService.getFeedbackById(id);
      return NextResponse.json({ data: feedback });
    }

    const result = await feedbackService.getFeedbackPaginated(page, limit);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching feedback', error: error.message },
      { status: error.message === 'Feedback not found' ? 404 : 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDb();

    const body = await req.json();

    // Validate request body against schema
    const validatedData = feedbackSchema.parse(body);

    const feedbackService = new FeedbackService();
    const feedback = await feedbackService.createFeedback(validatedData);

    return NextResponse.json({ message: "Feedback submitted successfully", data: feedback }, { status: 201 });
  } catch (error) {
    if (error.name === "ZodError") {
      return NextResponse.json({ message: "Validation error", errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
  }
}
