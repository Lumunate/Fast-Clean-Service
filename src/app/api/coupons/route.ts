import { NextResponse } from "next/server";
import { connectToDb } from "../../../lib/connect";
import couponService from "../../../services/coupon";

export async function GET(req: Request) {
  try {
    await connectToDb();
    const { searchParams } = new URL(req.url);
    const includeInactive = searchParams.get("includeInactive") === "true";

    const coupons = await couponService.getAllCoupons(includeInactive);
    return NextResponse.json(coupons);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to fetch coupons" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDb();
    const couponData = await req.json();
    const coupon = await couponService.createCoupon(couponData);
    return NextResponse.json(coupon, { status: 201 });
  } catch (error) {
    console.error("Error creating coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to create coupon" }, { status: 400 });
  }
}
