package com.stellervoyage.backend.service;

import com.stellervoyage.backend.dto.DestinationResponse;
import com.stellervoyage.backend.repository.DestinationRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DestinationService {
    DestinationRepository destinationRepository;

    /**
     * get destination details
     * @param destinationName
     * @return DestinationResponse
     */
    public DestinationResponse getDestinationDetails(String destinationName) {
        var destination = destinationRepository.findByName(destinationName)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "Destination with name - %s does not exist".formatted(destinationName)));

        return DestinationResponse.builder()
                .name(destination.getName())
                .culture(destination.getCulture())
                .planet(destination.getPlanet())
                .touristAttractions(destination.getTouristAttractions())
                .build();
    }

    /**
     * get all destinations in a planet
     * @param planet
     * @return List<DestinationResponse>
     */
    public List<DestinationResponse> getDestinationByPlanet(String planet) {
        var destinations = destinationRepository.findByPlanet(planet)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "Incorrect Email or User with Uuid - %s does not exist".formatted(planet)));

        return  destinations.stream()
                .map(destination -> DestinationResponse.builder()
                        .name(destination.getName())
                        .planet(destination.getPlanet())
                        .culture(destination.getCulture())
                        .touristAttractions(destination.getTouristAttractions())
                        .build()).toList();
    }
}
