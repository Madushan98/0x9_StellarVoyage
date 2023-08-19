package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.FlightMode;
import com.stellervoyage.backend.model.TravelMode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightResponse {
    private UUID flightId;
    private String from;
    private String to;
    private LocalDate departureDate;
    private LocalDate arrivalDate;
    private LocalDate returnDate;
    private TravelMode travelMode;
    private FlightMode flightMode;
    private double price;
    private int totalSeats;
    private int availableSeats;
}
