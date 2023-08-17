package com.stellervoyage.backend.dto.destination;

import com.stellervoyage.backend.model.Planet;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DestinationRequest {
    @NotBlank(message = "name is required")
    private String name;
    @Enumerated(EnumType.STRING)
    private Planet planet;
    private String climate;
    private String culture;
    private String touristAttractions;
}
