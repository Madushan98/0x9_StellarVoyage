package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.TravelMode;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightRequest {

    private Date departureDate;
    private Date returnDate;
    @Enumerated(EnumType.STRING)
    private TravelMode travelMode;
    private double price;
    private int totalSeats;
    private String from;
    private String to;
    private Time departureTime;
    private Time arrivalTime;
}
