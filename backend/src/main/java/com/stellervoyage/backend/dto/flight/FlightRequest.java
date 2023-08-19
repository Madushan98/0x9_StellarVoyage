package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.FlightMode;
import com.stellervoyage.backend.model.TravelMode;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightRequest {

    @Temporal(TemporalType.DATE)
    private LocalDate departureDate;
    @Temporal(TemporalType.DATE)
    private LocalDate returnDate;
    @Temporal(TemporalType.DATE)
    private LocalDate arrivalDate;
    @Temporal(TemporalType.TIME)
    private LocalTime departureTime;
    @Enumerated(EnumType.STRING)
    private TravelMode travelMode;
    @Enumerated(EnumType.STRING)
    private FlightMode flightMode;
    private double price;
    private int totalSeats;
    private String from;
    private String to;

}
