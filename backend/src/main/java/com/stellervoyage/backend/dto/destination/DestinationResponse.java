package com.stellervoyage.backend.dto.destination;

import com.stellervoyage.backend.model.Planet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DestinationResponse {
    private String name;
    private Planet planet;
    private String culture;
    private String climate;
    private String touristAttractions;
    private UUID id;
}
