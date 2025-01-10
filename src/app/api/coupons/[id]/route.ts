import { NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/connect";
import couponService from "../../../../services/coupon";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(req: Request, { params }: RouteParams) {
  try {
    await connectToDb();
    const coupon = await couponService.getCoupon(params.id);
    return NextResponse.json(coupon);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to fetch coupon" }, { status: 404 });
  }
}

export async function PUT(req: Request, { params }: RouteParams) {
  try {
    await connectToDb();
    const couponData = await req.json();
    const coupon = await couponService.updateCoupon(params.id, couponData);
    return NextResponse.json(coupon);
  } catch (error) {
    console.error("Error updating coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to update coupon" }, { status: 404 });
  }
}

export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    await connectToDb();
    const coupon = await couponService.deleteCoupon(params.id);
    return NextResponse.json(coupon);
  } catch (error) {
    console.error("Error deleting coupon:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to delete coupon" }, { status: 404 });
  }
}
