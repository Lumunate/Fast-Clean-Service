import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import SubscriptionPackageService from "../../../../services/subscription-package";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    if (id) {
      const pkg = await SubscriptionPackageService.getPackageById(id as string);
      if (!pkg) {
        return NextResponse.json({ message: 'Subscription pkg not found' }, { status: 404 });
      }
      return NextResponse.json(pkg);
    }
    const packages = await SubscriptionPackageService.getAllPackages();
    return NextResponse.json(packages);
  } catch (error) {
    console.error('Error in handleGet:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    // Check if the request body is an array for bulk creation
    const body = await req.json()
    if (Array.isArray(body)) {
      const packages = await SubscriptionPackageService.createManyPackages(body);
      return NextResponse.json(packages);
    }
    
    const pkg = await SubscriptionPackageService.createPackage(body);
    return NextResponse.json(pkg);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: 'Validation error', errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const pkg = await SubscriptionPackageService.updatePackage(id as string, await req.json());
    if (!pkg) {
      return NextResponse.json({ message: 'Subscription pkg not found' }, { status: 404 });
    }
    return NextResponse.json(pkg);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: 'Validation error', errors: error.errors }, { status: 400 });
    }
    
    console.error('Error in handlePut:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const pkg = await SubscriptionPackageService.updatePartialPackage(id as string, await req.json());
    if (!pkg) {
      return NextResponse.json({ message: 'Subscription pkg not found' });
    }
    return NextResponse.json(pkg);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: 'Validation error', errors: error.errors });
    }
    console.error('Error in handlePatch:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const pkg = await SubscriptionPackageService.deletePackage(id as string);
    if (!pkg) {
      return NextResponse.json({ message: 'Subscription pkg not found' });
    }
    return NextResponse.json({ message: 'Subscription pkg deleted successfully' });
  } catch (error) {
    console.error('Error in handleDelete:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}