import { buildDistanceMatrixUrl, formatLocation, handleDistanceMatrixResponse } from "../services/distance-matrix";
import { DistanceResponse, distanceResponseSchema, Location } from "../types/distance-matrix";

export const calculateDistance = async (
  originLocation: Location,
  destinationLocation: Location
): Promise<DistanceResponse> => {
  try {
    const origin = formatLocation(originLocation);
    const destination = formatLocation(destinationLocation);
    const url = buildDistanceMatrixUrl(origin, destination);

    const response = await fetch(url);
    const data = await response.json();
    
    return handleDistanceMatrixResponse(data);
  } catch (error) {
    return distanceResponseSchema.parse({
      distance: 0,
      duration: 0,
      status: 'ERROR',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
};