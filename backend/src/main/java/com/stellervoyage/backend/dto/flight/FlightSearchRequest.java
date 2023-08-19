package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.TravelMode;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightSearchRequest {
    String fromLocation;
    String toLocation;
    @Temporal(TemporalType.DATE)
    LocalDate departureDate;
    TravelMode travelMode;
    Double maxPrice;
    Integer minAvailableSeats;
    @Temporal(TemporalType.DATE)
    LocalDate returnDate;
}
