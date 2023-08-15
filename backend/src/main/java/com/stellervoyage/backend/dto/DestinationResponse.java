package com.stellervoyage.backend.dto;

import com.stellervoyage.backend.model.Planet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DestinationResponse {
    private String name;
    private Planet planet;
    private String culture;
    private String touristAttractions;
}