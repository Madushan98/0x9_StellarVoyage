package com.stellervoyage.backend.service;

import com.stellervoyage.backend.dto.LoginRequest;
import com.stellervoyage.backend.dto.LoginResponse;
import com.stellervoyage.backend.dto.RegistrationRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    /**
     * This method registers users in the system
     *
     * @param request : RegistrationRequest
     * @return LoginResponse
     */
    public LoginResponse register(RegistrationRequest request) {
        // todo implement the register process
        return null;
    }

    /**
     * This method authenticates users
     *
     * @param request : LoginRequest
     * @return LoginResponse
     */
    public LoginResponse login(LoginRequest request) {
        // todo implement the login process
        return null;
    }
}
