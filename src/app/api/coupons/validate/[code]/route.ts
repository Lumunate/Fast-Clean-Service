import { NextResponse } from "next/server";
import { connectToDb } from "../../../../../lib/connect";
import couponService from "../../../../../services/coupon";

interface RouteParams {
  params: { code: string };
}

export async function GET(req: Request, { params }: RouteParams) {
  try {
    await connectToDb();
    const result = await couponService.validateCoupon(params.code);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error validating coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to validate coupon" }, { status: 400 });
  }
}
