package com.stellervoyage.backend.service;

import com.stellervoyage.backend.dto.flight.FlightRequest;
import com.stellervoyage.backend.dto.flight.FlightResponse;
import com.stellervoyage.backend.dto.flight.FlightSearchRequest;
import com.stellervoyage.backend.exceptions.NoSuchElementFoundException;
import com.stellervoyage.backend.model.Destination;
import com.stellervoyage.backend.model.Flight;
import com.stellervoyage.backend.repository.DestinationRepository;
import com.stellervoyage.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FlightService {

    private final FlightRepository flightRepository;
    private final DestinationRepository destinationRepository;
    Logger logger = LoggerFactory.getLogger(FlightService.class);

    /**
     * get Flight details using flight name
     *
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
     *
     * @param request
     * @return FlightResponse
     */
    public FlightResponse createFlight(FlightRequest request) {
        Destination fromDestination = destinationRepository.findByName(request.getFrom()).orElseThrow(
                () -> new NoSuchElementFoundException("No Destination is available by the name %s ".formatted(request.getFrom())));

        Destination toDestination = destinationRepository.findByName(request.getTo()).orElseThrow(
                () -> new NoSuchElementFoundException("No Destination is available by the name %s ".formatted(request.getTo())));

        var flight = mapRequestToFlight(request, fromDestination, toDestination);
        var savedFlight = flightRepository.save(flight);
        logger.info("Flight Details saved successfully");
        return mapFlightToResponse(savedFlight);
    }

    /**
     * Flight model Convert to FlightResponse
     * @param flight
     * @return FlightResponse
     */
    public FlightResponse mapFlightToResponse(Flight flight) {
        return FlightResponse.builder()
                .flightId(flight.getFlightId())
                .from(flight.getFrom().getName())
                .to(flight.getTo().getName())
                .departureDate(flight.getDepartureDate())
                .arrivalDate(flight.getArrivalDate())
                .returnDate(flight.getReturnDate())
                .totalSeats(flight.getTotalSeats())
                .travelMode(flight.getTravelMode())
                .flightMode(flight.getFlightMode())
                .price(flight.getPrice())
                .availableSeats(flight.getAvailableSeats())
                .build();
    }

    public Flight mapRequestToFlight(FlightRequest request, Destination from, Destination to) {
        return Flight.builder()
                .from(from)
                .to(to)
                .travelMode(request.getTravelMode())
                .flightMode(request.getFlightMode())
                .flightId(UUID.randomUUID())
                .availableSeats(40)
                .totalSeats(40)
                .departureDate(request.getDepartureDate())
                .arrivalDate(request.getArrivalDate())
                .returnDate(request.getReturnDate())
                .departureTime(request.getDepartureTime())
                .price(request.getPrice())
                .build();
    }

    /**
     *  Get the Flight based on different search properties
     * @param request of type FlightSearchRequest
     * @return List<FlightResponse>
     */
    public List<FlightResponse> getFlightResults(FlightSearchRequest request) {

        List<Flight> searchResult = flightRepository
                .searchFlights(
                        request.getFromLocation(),
                        request.getToLocation(),
                        request.getTravelMode(),
                        request.getDepartureDate(),
                        request.getMinAvailableSeats()
                        );

        return searchResult.stream().map(this::mapFlightToResponse).toList();
    }

    /**
     * Get all Fights
     * @return List of Flight Responses
     */
    public List<FlightResponse> getAllFlights() {
        List<Flight> flights = flightRepository.findAll();
        return  flights.stream().map(this::mapFlightToResponse
        ).toList();
    }


}
