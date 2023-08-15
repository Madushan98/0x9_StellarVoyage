package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
    Optional<Destination> findByName(String name);

    boolean existsByName(String name);

    Optional<List<Destination>> findByPlanet(String planet);

    @Query("SELECT d FROM Destination d WHERE " +
            "d.name LIKE CONCAT('%', :query, '%') " +
            "OR d.planet LIKE CONCAT('%', :query, '%') " +
            "OR d.culture LIKE CONCAT('%', :query, '%') " +
            "OR d.touristAttractions LIKE CONCAT('%', :query, '%')")
    List<Destination> searchDestinations(String query);
}
