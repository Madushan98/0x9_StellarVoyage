package com.stellervoyage.backend.controller;

import com.stellervoyage.backend.dto.user.UpdateUserResponse;
import com.stellervoyage.backend.dto.user.UserDetailsResponse;
import com.stellervoyage.backend.dto.user.UserUpdateRequest;
import com.stellervoyage.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/{id}")
    public ResponseEntity<UserDetailsResponse> getUserDetails(
            @PathVariable UUID id
    ) {
        return ResponseEntity.ok(service.getUserDetails(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UpdateUserResponse> updateUserDetails(
            @PathVariable UUID id , @RequestBody UserUpdateRequest request
    ) {
        return ResponseEntity.ok(service.updateUserDetails(id,request));
    }

}
