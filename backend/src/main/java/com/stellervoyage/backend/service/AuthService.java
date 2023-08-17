package com.stellervoyage.backend.service;

import com.stellervoyage.backend.config.JwtService;
import com.stellervoyage.backend.dto.user.LoginRequest;
import com.stellervoyage.backend.dto.user.LoginResponse;
import com.stellervoyage.backend.dto.user.RegistrationRequest;
import com.stellervoyage.backend.exceptions.UserAlreadyExistsException;
import com.stellervoyage.backend.model.Role;
import com.stellervoyage.backend.model.User;
import com.stellervoyage.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    Logger logger = LoggerFactory.getLogger(AuthService.class);


    /**
     * This method registers users in the system
     * @param request : RegistrationRequest
     * @return LoginResponse
     */
    public LoginResponse register(RegistrationRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("User with email - %s already exists".formatted(request.getEmail()));
        }

        var user = User.builder()
                .userId(UUID.randomUUID())
                .name(request.getName())
                .email(request.getEmail())
                .natId(request.getNatId())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        var registeredUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        logger.info("User registered successfully");
        return LoginResponse.builder()
                .id(registeredUser.getUserId())
                .accessToken(jwtToken)
                .build();
    }

    /**
     * This method authenticates users
     * @param request : LoginRequest
     * @return LoginResponse
     */
    public LoginResponse login(LoginRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException(
                        "Incorrect Email or User with E-mail - %s does not exist".formatted(request.getEmail())));
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (Exception e) {
            throw new BadCredentialsException("Password is incorrect for user : %s"
                    .formatted(request.getEmail()));
        }

        var jwtToken = jwtService.generateToken(user);
        logger.info("User Logged in successfully");
        return LoginResponse.builder()
                .id(user.getUserId())
                .accessToken(jwtToken)
                .build();
    }
}
