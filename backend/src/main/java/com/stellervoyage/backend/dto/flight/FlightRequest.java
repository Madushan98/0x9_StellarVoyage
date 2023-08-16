package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.TravelMode;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlightRequest {

    @Temporal(TemporalType.DATE)
    private Date departureDate;
    @Temporal(TemporalType.DATE)
    private Date returnDate;
    private Date departureTime;
    @Enumerated(EnumType.STRING)
    private TravelMode travelMode;
    private double price;
    private int totalSeats;
    private String from;
    private String to;
    private Date arrivalTime;
}
