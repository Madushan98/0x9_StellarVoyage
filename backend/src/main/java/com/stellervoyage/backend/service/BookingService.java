package com.stellervoyage.backend.service;

import com.stellervoyage.backend.dto.Booking.BookingRequest;
import com.stellervoyage.backend.dto.Booking.BookingResponse;
import com.stellervoyage.backend.exceptions.NoSuchElementFoundException;
import com.stellervoyage.backend.model.Booking;
import com.stellervoyage.backend.model.Flight;
import com.stellervoyage.backend.model.User;
import com.stellervoyage.backend.repository.BookingRepository;
import com.stellervoyage.backend.repository.FlightRepository;
import com.stellervoyage.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BookingService {

    Logger logger = LoggerFactory.getLogger(BookingService.class);
    private final UserRepository userRepository;
    private final FlightRepository flightRepository;
    private final BookingRepository bookingRepository;

    /**
     * Create the booking by using Booking request information
     * @param request
     * @return BookingResponse
     */
    public BookingResponse createBooking(BookingRequest request) {
        User user = userRepository.findByUserId(request.getUserId())
                .orElseThrow(() -> new UsernameNotFoundException(
                "Incorrect User id or User with user id - %s does not exist".formatted(request.getUserId())));

        Flight flight = flightRepository.findByFlightId(request.getFlightId()).orElseThrow(() -> new NoSuchElementFoundException(
                "Incorrect User id or User with user id - %s does not exist".formatted(request.getFlightId())));

        // calculate total price for all the passengers
        double totalPrice = flight.getPrice() * request.getNumOfPassengers();

        Booking booking = Booking.builder()
                .bookingId(UUID.randomUUID())
                .user(user)
                .flight(flight)
                .passengers(request.getNumOfPassengers())
                .totalPrice(totalPrice)  // Use the calculated total price
                .build();

        // Save the booking to the database
        Booking savedBooking = bookingRepository.save(booking);

        // Map the saved booking to the response DTO
        return mapBookingToResponse(savedBooking);
    }

    /**
     * Get all Bookings
     * @return List of Booking Responses
     */
    public List<BookingResponse> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return  bookings.stream().map(this::mapBookingToResponse).toList();
    }
    private BookingResponse mapBookingToResponse(Booking booking) {

        return BookingResponse.builder()
                .bookingId(booking.getBookingId())
                .userId(booking.getUser().getUserId())
                .flightId(booking.getUser().getUserId())
                .passengers(booking.getPassengers())
                .totalPrice(booking.getTotalPrice())
                .from(booking.getFlight().getFrom().getName())
                .to(booking.getFlight().getTo().getName())
                .departureDate(booking.getFlight().getDepartureDate())
                .departureTime(booking.getFlight().getDepartureTime())
                .build();
    }

    public List<BookingResponse> getUserBookings(UUID userId) {
        List<Booking> bookings = bookingRepository.findByUserUserId(userId);
        return  bookings.stream().map(this::mapBookingToResponse).toList();
    }


}
