package com.stellervoyage.backend.service;

import com.stellervoyage.backend.config.JwtService;
import com.stellervoyage.backend.dto.user.UpdateUserResponse;
import com.stellervoyage.backend.dto.user.UserDetailsResponse;
import com.stellervoyage.backend.dto.user.UserUpdateRequest;
import com.stellervoyage.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final JwtService jwtService;

    /**
     * get user details using userId
     * @param id
     * @return UserDetailsResponse
     */
    public UserDetailsResponse getUserDetails(UUID id) {
        var user = userRepository.findByUserId(id)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "Incorrect User id or User with user id - %s does not exist".formatted(id)));
        return UserDetailsResponse.builder()
                .email(user.getEmail())
                .name(user.getName())
                .natId(user.getNatId())
                .build();
    }

    /**
     * Update User Details
     * @param id
     * @param request
     * @return UpdateUserResponse
     */
    public UpdateUserResponse updateUserDetails(UUID id, UserUpdateRequest request) {
        var user = userRepository.findByUserId(id)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "Incorrect Email or User with Uuid - %s does not exist".formatted(id)));

        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setNatId(request.getNatId());

        var updatedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(updatedUser);
        logger.info("User Updated successfully");
        return UpdateUserResponse.builder()
                .email(user.getEmail())
                .name(user.getName())
                .natId(user.getNatId())
                .accessToken(jwtToken)
                .build();
    }
}
