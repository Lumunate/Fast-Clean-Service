import type {NextApiResponse} from "next";
import {z} from "zod";
import dbConnect from "../../../lib/dbConnect";
import {contactSchema} from "../../../types/contactForm";
import ContactService from "../../../services/contact";
import {NextRequest, NextResponse} from "next/server";

type ContactResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function POST(req: NextRequest, res: NextApiResponse<ContactResponse>) {
  await dbConnect();

  try {
    // Validate the request body
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // Use the service layer to handle the contact submission
    await ContactService.submitContactForm(validatedData);

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Contact POST failed:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message).join(", ") }, { status: 400 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}