package com.stellervoyage.backend.dto.Booking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookingResponse {

        private UUID bookingId;
        private UUID userId;
        private UUID flightId;
        private int passengers;
        private double totalPrice;
        private String from;
        private String to;
        private LocalDate departureDate;
        private LocalTime departureTime;

}
