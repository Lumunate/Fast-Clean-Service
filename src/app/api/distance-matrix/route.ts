import { NextResponse } from 'next/server';
import { distanceRequestSchema, distanceResponseSchema } from '../../../types/distance-matrix';
import { calculateDistance } from '../../../repositories/distance-matrix';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = distanceRequestSchema.safeParse(body);
    
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.message },
        { status: 400 }
      );
    }

    const { origin, destination } = parseResult.data;
    const result = await calculateDistance(origin, destination);

    // Validate response before sending
    const validatedResult = distanceResponseSchema.parse(result);

    if (validatedResult.status === 'ERROR') {
      return NextResponse.json(
        { error: validatedResult.error || 'Failed to calculate distance' },
        { status: 500 }
      );
    }

    return NextResponse.json(validatedResult);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}