package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.TravelMode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightResponse {
    private String from;
    private String to;
    private Date departureDate;
    private Date arrivalDate;
    private Date returnDate;
    private TravelMode travelMode;
    private double price;
    private int totalSeats;
    private int availableSeats;
}
