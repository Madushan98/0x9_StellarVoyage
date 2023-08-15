package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
    Optional<Flight> findByFlightId(UUID flightId);
}
