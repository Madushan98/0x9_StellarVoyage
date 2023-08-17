package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Flight;
import com.stellervoyage.backend.model.TravelMode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FlightRepository extends JpaRepository<Flight, Integer>, JpaSpecificationExecutor<Flight> {
    Optional<Flight> findByFlightId(UUID flightId);

    @Query("SELECT f FROM Flight f " +
            "WHERE (:fromLocation IS NULL OR f.from.name = :fromLocation) " +
            "AND (:toLocation IS NULL OR f.to.name = :toLocation) " +
            "AND (:travelMode IS NULL OR f.travelMode = :travelMode) " +
            "AND (:departureDate IS NULL OR f.departureDate = :departureDate) " +
            "AND (:minAvailableSeats IS NULL OR f.availableSeats <= :minAvailableSeats) ")
    List<Flight> searchFlights(
            @Param("fromLocation") String fromLocation,
            @Param("toLocation") String toLocation,
            @Param("travelMode") TravelMode travelMode,
            @Param("departureDate") LocalDate departureDate,
            @Param("minAvailableSeats") Integer minAvailableSeats
    );
}
