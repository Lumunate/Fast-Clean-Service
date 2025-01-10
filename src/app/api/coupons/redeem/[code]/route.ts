import { NextResponse } from "next/server";
import { connectToDb } from "../../../../../lib/connect";
import couponService from "../../../../../services/coupon";

interface RouteParams {
  params: { code: string };
}

export async function POST(req: Request, { params }: RouteParams) {
  try {
    await connectToDb();
    const result = await couponService.applyCoupon(params.code);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error applying coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to apply coupon" }, { status: 400 });
  }
}
