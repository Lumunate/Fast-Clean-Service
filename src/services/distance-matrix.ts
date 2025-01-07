import { distanceMatrixResponseSchema, DistanceResponse, distanceResponseSchema, Location } from "../types/distance-matrix";

const DISTANCE_MATRIX_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const DISTANCE_MATRIX_BASE_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

export const formatLocation = (location: Location): string => 
  `${location.address}, ${location.city}`;

export const buildDistanceMatrixUrl = (origin: string, destination: string): string =>
  `${DISTANCE_MATRIX_BASE_URL}?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${DISTANCE_MATRIX_API_KEY}`;

export const handleDistanceMatrixResponse = (rawResponse: unknown): DistanceResponse => {
  // Parse and validate the raw response
  const parseResult = distanceMatrixResponseSchema.safeParse(rawResponse);
  
  if (!parseResult.success) {
    return distanceResponseSchema.parse({
      distance: 0,
      duration: 0,
      status: 'ERROR',
      error: 'Invalid API response format'
    });
  }

  const response = parseResult.data;

  if (response.status !== 'OK') {
    return distanceResponseSchema.parse({
      distance: 0,
      duration: 0,
      status: 'ERROR',
      error: response.error_message || 'Failed to fetch distance'
    });
  }

  const element = response.rows[0]?.elements[0];
  
  if (!element || element.status !== 'OK' || !element.distance || !element.duration) {
    return distanceResponseSchema.parse({
      distance: 0,
      duration: 0,
      status: 'ZERO_RESULTS'
    });
  }

  return distanceResponseSchema.parse({
    distance: element.distance.value,
    duration: element.duration.value,
    status: 'OK'
  });
};