package com.stellervoyage.backend.repository;

import com.stellervoyage.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

    List<Booking> findByUserUserId(UUID userId);
}
