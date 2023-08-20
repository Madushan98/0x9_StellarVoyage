package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.user.*;
import com.stellervoyage.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(
            @RequestBody @Valid RegistrationRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody @Valid LoginRequest request
    ) {
        return ResponseEntity.ok(service.login(request));
    }

    @PostMapping("/verifyEmail")
    public ResponseEntity<LoginResponse> verifyUser(VerifyUserRequest request) {
        return ResponseEntity.ok(service.verifyEmail(request));
    }

    @GetMapping("/getcode")
    public ResponseEntity<RegistrationResponse> getCode(VerificationCodeRequest request) {
        return ResponseEntity.ok(service.getVerificationCode(request));
    }
}
