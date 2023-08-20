interface FlightInfo {
  flightId: string;
  from?: string;
  to?: string;
  departureDate?: string;
  arrivalDate?: string;
  returnDate?: string;
  travelMode?: 'OneWay' | 'RoundTrip';
  flightMode: 'Portal' | 'SpaceShip';
  price?: number;
  totalSeats?: number;
  availableSeats?: number;
}

interface SearchFlightRequest {
  fromLocation?: string;
  toLocation?: string;
  departureDate?: string | null;
  travelMode?: 'OneWay' | 'Return'; // Assuming these are the only two travel modes
  maxPrice?: number;
  minAvailableSeats?: number;
  returnDate?: string; // Optional for 'OneWay'
}