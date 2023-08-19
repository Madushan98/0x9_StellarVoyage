interface FlightInfo {
  flightId: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  returnDate: string;
  travelMode: 'OneWay' | 'RoundTrip';
  flightMode: 'Portal' | 'SpaceShip';
  price: number;
  totalSeats: number;
  availableSeats: number;
}