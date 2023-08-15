package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.destination.DestinationRequest;
import com.stellervoyage.backend.dto.destination.DestinationResponse;
import com.stellervoyage.backend.dto.flight.FlightRequest;
import com.stellervoyage.backend.dto.flight.FlightResponse;
import com.stellervoyage.backend.repository.FlightRepository;
import com.stellervoyage.backend.service.FlightService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/flight")
@RequiredArgsConstructor
public class FlightController {

    private final FlightService flightService;

    @PostMapping("/create")
    public ResponseEntity<FlightResponse> createFlight(
            @RequestBody @Valid FlightRequest request
    ) {
        return ResponseEntity.ok(flightService.createFlight(request));
    }

    @GetMapping("/{Id}")
    public ResponseEntity<FlightResponse> getFlightDetails(
            @PathVariable UUID id
    ) {
        return ResponseEntity.ok(flightService.getFlightDetails(id));
    }




}
