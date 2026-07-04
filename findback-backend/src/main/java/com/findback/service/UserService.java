package com.findback.service;

import com.findback.dto.request.UpdateProfileRequest;
import com.findback.dto.response.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse getUserById(Long id);

    UserResponse getUserByEmail(String email);

    List<UserResponse> getAllUsers();

    UserResponse updateProfile(Long id, UpdateProfileRequest request);

    void deleteUser(Long id);

}