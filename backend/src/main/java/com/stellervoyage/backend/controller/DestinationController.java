package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.DestinationResponse;
import com.stellervoyage.backend.dto.UserDetailsResponse;
import com.stellervoyage.backend.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/destination")
@RequiredArgsConstructor
public class DestinationController {

    private final DestinationService service;

    @GetMapping("/{destination}")
    public ResponseEntity<DestinationResponse> getDestination(
            @PathVariable String destination
    ) {
        return ResponseEntity.ok(service.getDestinationDetails(destination));
    }

    @GetMapping("/{planet}")
    public ResponseEntity<List<DestinationResponse>> getDestinationsByPlanet(
            @PathVariable String planet
    ) {
        return ResponseEntity.ok(service.getDestinationByPlanet(planet));
    }


}
