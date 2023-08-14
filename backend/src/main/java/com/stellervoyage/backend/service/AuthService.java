package com.stellervoyage.backend.service;

import com.stellervoyage.backend.config.JwtService;
import com.stellervoyage.backend.dto.LoginRequest;
import com.stellervoyage.backend.dto.LoginResponse;
import com.stellervoyage.backend.dto.RegistrationRequest;
import com.stellervoyage.backend.model.Role;
import com.stellervoyage.backend.model.User;
import com.stellervoyage.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /**
     * This method registers users in the system
     *
     * @param request : RegistrationRequest
     * @return LoginResponse
     */
    public LoginResponse register(RegistrationRequest request) {
        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return LoginResponse.builder()
                .accessToken(jwtToken)
                .build();
    }

    /**
     * This method authenticates users
     *
     * @param request : LoginRequest
     * @return LoginResponse
     */
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return LoginResponse.builder()
                .accessToken(jwtToken)
                .build();
    }
}
