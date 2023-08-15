package com.stellervoyage.backend.exceptions;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApplicationExceptionHandler  {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException exception) {
        return exception.getBindingResult().getFieldErrors()
                .stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Object> handleUserAlreadyExistsException(UserAlreadyExistsException e, HttpServletRequest request) {
        return new ResponseEntity<>(
                ErrorResponse.builder()
                        .status(HttpStatus.CONFLICT)
                        .message(e.getMessage())
                        .uri(request.getRequestURI())
                        .trace(e.getStackTrace()[0])
                        .timeStamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<Object> handleUsernameNotFoundException(UsernameNotFoundException e, HttpServletRequest request) {
        return new ResponseEntity<>(
                ErrorResponse.builder()
                        .status(HttpStatus.NOT_FOUND)
                        .message(e.getMessage())
                        .uri(request.getRequestURI())
                        .trace(e.getStackTrace()[0])
                        .timeStamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> handleBadCredentialsException(BadCredentialsException e, HttpServletRequest request) {

        return new ResponseEntity<>(
                ErrorResponse.builder()
                        .status(HttpStatus.UNAUTHORIZED)
                        .message(e.getMessage())
                        .uri(request.getRequestURI())
                        .trace(e.getStackTrace()[0])
                        .timeStamp(ZonedDateTime.now(ZoneId.of("Z")))
                        .build(), HttpStatus.UNAUTHORIZED);
    }

}
