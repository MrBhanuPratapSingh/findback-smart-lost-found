package com.findback.controller;

import com.findback.dto.request.UpdateProfileRequest;
import com.findback.dto.response.UserResponse;
import com.findback.response.ApiResponse;
import com.findback.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    // ==========================
    // Get All Users
    // ==========================
    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResponse>>> getAllUsers() {

        List<UserResponse> users = userService.getAllUsers();

        ApiResponse<List<UserResponse>> response =
                ApiResponse.<List<UserResponse>>builder()
                        .success(true)
                        .message("Users fetched successfully")
                        .data(users)
                        .build();

        return ResponseEntity.ok(response);
    }

    // ==========================
    // Get User By Id
    // ==========================
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponse>> getUserById(
            @PathVariable Long id) {

        UserResponse user = userService.getUserById(id);

        ApiResponse<UserResponse> response =
                ApiResponse.<UserResponse>builder()
                        .success(true)
                        .message("User fetched successfully")
                        .data(user)
                        .build();

        return ResponseEntity.ok(response);
    }

    // ==========================
    // Get User By Email
    // ==========================
    @GetMapping("/email/{email}")
    public ResponseEntity<ApiResponse<UserResponse>> getUserByEmail(
            @PathVariable String email) {

        UserResponse user = userService.getUserByEmail(email);

        ApiResponse<UserResponse> response =
                ApiResponse.<UserResponse>builder()
                        .success(true)
                        .message("User fetched successfully")
                        .data(user)
                        .build();

        return ResponseEntity.ok(response);
    }

    // ==========================
    // Update User
    // ==========================
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponse>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateProfileRequest request) {

        UserResponse user = userService.updateProfile(id, request);

        ApiResponse<UserResponse> response =
                ApiResponse.<UserResponse>builder()
                        .success(true)
                        .message("Profile updated successfully")
                        .data(user)
                        .build();

        return ResponseEntity.ok(response);
    }

    // ==========================
    // Delete User
    // ==========================
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteUser(
            @PathVariable Long id) {

        userService.deleteUser(id);

        ApiResponse<String> response =
                ApiResponse.<String>builder()
                        .success(true)
                        .message("User deleted successfully")
                        .data("Deleted")
                        .build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}