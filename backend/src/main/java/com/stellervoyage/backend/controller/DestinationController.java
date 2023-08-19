package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.destination.DestinationRequest;
import com.stellervoyage.backend.dto.destination.DestinationResponse;
import com.stellervoyage.backend.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/destinations")
@RequiredArgsConstructor
public class DestinationController {

    private final DestinationService service;

    @PostMapping("/create")
    public ResponseEntity<DestinationResponse> createDestination(
            @RequestBody @Valid DestinationRequest request
    ) {
        return ResponseEntity.ok(service.createDestination(request));
    }

    @GetMapping("/destination/{destination}")
    public ResponseEntity<DestinationResponse> getDestination(
            @PathVariable String destination
    ) {
        return ResponseEntity.ok(service.getDestinationDetails(destination));
    }

    @GetMapping("/planet/{planet}")
    public ResponseEntity<List<DestinationResponse>> getDestinationsByPlanet(
            @PathVariable String planet
    ) {
        return ResponseEntity.ok(service.getDestinationByPlanet(planet));
    }

    @GetMapping("/search")
    public ResponseEntity<List<DestinationResponse>> searchDestinations(@RequestParam String query) {
        return ResponseEntity.ok(service.searchDestinations(query));
    }

    @GetMapping("/all")
    public ResponseEntity<List<DestinationResponse>> getAll() {
        return ResponseEntity.ok(service.getAllDestinations());
    }
    @GetMapping("/allNames")
    public ResponseEntity<List<String>> getAllNames() {
        return ResponseEntity.ok(service.getAllDestinationNames());
    }


}
