package com.stellervoyage.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Flights")
public class Flight {

    @Id
    @SequenceGenerator(name = "FLIGHT_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "FLIGHT_SEQ")
    private int id;
    private UUID flightId;
    private Date departureDate;
    @Enumerated(EnumType.STRING)
    private TravelMode travelMode;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "from_location", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Destination from;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "to_location", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Destination to;
    private double price;
    private int availableSeats;
    private int totalSeats;
    private Date returnDate;
}
