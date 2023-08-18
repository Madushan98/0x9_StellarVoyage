package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.Booking.BookingRequest;
import com.stellervoyage.backend.dto.Booking.BookingResponse;
import com.stellervoyage.backend.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/booking")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<BookingResponse> createBooking(
            @RequestBody @Valid BookingRequest request
    ) {
        return ResponseEntity.ok(bookingService.createBooking(request));
    }

    @GetMapping("/all")
    public ResponseEntity<List<BookingResponse>> getAll() {

        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<BookingResponse>> getUserBookings(
            @PathVariable UUID userId
    ) {

        return ResponseEntity.ok(bookingService.getUserBookings(userId));
    }


}
