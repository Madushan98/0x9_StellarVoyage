package com.stellervoyage.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Destinations")
public class Destination {

    @Id
    @SequenceGenerator(name = "DESTINATION_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "DESTINATION_SEQ")
    private int id;
    private UUID destinationId;
    private String name;
    @Enumerated(EnumType.STRING)
    private Planet planet;
    private String culture;
    private String climate;
    private String touristAttractions;

}
