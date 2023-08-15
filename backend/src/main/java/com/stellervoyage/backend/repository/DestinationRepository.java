package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
    Optional<Destination> findByName(String name);

    Optional<List<Destination>> findByPlanet(String planet);
}
