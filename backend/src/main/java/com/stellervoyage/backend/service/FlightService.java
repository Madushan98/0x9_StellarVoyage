package com.stellervoyage.backend.service;

import com.stellervoyage.backend.dto.destination.DestinationResponse;
import com.stellervoyage.backend.dto.flight.FlightRequest;
import com.stellervoyage.backend.dto.flight.FlightResponse;
import com.stellervoyage.backend.exceptions.NoSuchElementFoundException;
import com.stellervoyage.backend.exceptions.UserAlreadyExistsException;
import com.stellervoyage.backend.model.Destination;
import com.stellervoyage.backend.model.Flight;
import com.stellervoyage.backend.model.TravelMode;
import com.stellervoyage.backend.repository.DestinationRepository;
import com.stellervoyage.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FlightService {

    private FlightRepository flightRepository;
    private DestinationRepository destinationRepository;
    Logger logger = LoggerFactory.getLogger(FlightService.class);

    /**
     * get Flight details using flight name
     * @param flightId
     * @return FlightResponse
     */
    public FlightResponse getFlightDetails(UUID flightId) {
        var flight = flightRepository.findByFlightId(flightId)
                .orElseThrow(() -> new NoSuchElementFoundException(
                        "Flight with id - %s does not exist".formatted(flightId)));

        return mapFlightToResponse(flight);
    }

    /**
     * create flight using the flight request details
     * @param request
     * @return FlightResponse
     */
    public FlightResponse createFlight(FlightRequest request) {
        Destination fromDestination = destinationRepository.findByName(request.getFrom()).orElseThrow(
                () -> new NoSuchElementFoundException("No Destination is available by the name %s ".formatted(request.getFrom())));

        Destination toDestination = destinationRepository.findByName(request.getTo()).orElseThrow(
                () -> new NoSuchElementFoundException("No Destination is available by the name %s ".formatted(request.getTo())));

        var flight = mapRequestToFlight(request,fromDestination,toDestination);
        var savedFlight = flightRepository.save(flight);
        logger.info("Flight Details saved successfully");
        return mapFlightToResponse(savedFlight);
    }

    public FlightResponse mapFlightToResponse(Flight flight){
       return FlightResponse.builder()
                .from(flight.getFrom().getName())
                .to(flight.getTo().getName())
                .departureDate(flight.getDepartureDate())
                .returnDate(flight.getReturnDate())
                .totalSeats(flight.getTotalSeats())
                .travelMode(flight.getTravelMode())
                .availableSeats(flight.getAvailableSeats())
                .build();
    }

    public Flight mapRequestToFlight(FlightRequest request, Destination from, Destination to){
        return  Flight.builder()
                .from(from)
                .to(to)
                .travelMode(request.getTravelMode())
                .flightId(UUID.randomUUID())
                .availableSeats(40)
                .totalSeats(40)
                .departureDate(request.getDepartureDate())
                .returnDate(request.getReturnDate())
                .build();
    }

}
