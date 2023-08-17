package com.stellervoyage.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Bookings")
public class Booking {

    @Id
    @SequenceGenerator(name = "BOOKING_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOOKING_SEQ")
    private int id;
    private UUID bookingId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "flight_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Flight flight;

    private int passengers;
    private String flightClass;
    private double totalPrice;

    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    private Payment payment;

}
