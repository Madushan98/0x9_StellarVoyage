interface BookingInfoRequest {
  userId: string;
  flightId: string;
  numOfPassengers: number;
}

interface BookingInfoResponse {
  bookingId: string;
  userId: string;
  flightId: string;
  passengers: number;
  totalPrice: number;
}

