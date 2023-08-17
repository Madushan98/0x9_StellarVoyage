package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Destination;
import com.stellervoyage.backend.model.Planet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
    Optional<Destination> findByName(String name);

    boolean existsByName(String name);

    Optional<List<Destination>> findByPlanet(Planet planet);

    @Query("SELECT d FROM Destination d WHERE " +
            "LOWER(d.name) LIKE CONCAT('%', LOWER(:query), '%') " +
            "OR LOWER(d.planet) LIKE CONCAT('%', LOWER(:query), '%') " +
            "OR LOWER(d.culture) LIKE CONCAT('%', LOWER(:query), '%') " +
            "OR LOWER(d.touristAttractions) LIKE CONCAT('%', LOWER(:query), '%')")
    List<Destination> searchDestinations(String query);
}
