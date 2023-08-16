package com.stellervoyage.backend.dto.flight;

import com.stellervoyage.backend.model.TravelMode;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightSearchRequest {
    String fromLocation;
    String toLocation;
    @Temporal(TemporalType.DATE)
    Date departureDate;
    TravelMode travelMode;
    Double maxPrice;
    Integer minAvailableSeats;
    Date returnDate;
}
