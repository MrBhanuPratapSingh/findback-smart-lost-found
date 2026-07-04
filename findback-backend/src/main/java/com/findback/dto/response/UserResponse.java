package com.findback.dto.response;

import com.findback.enums.Role;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phone;

    private String profileImage;

    private Role role;

    private boolean enabled;

    private LocalDateTime createdAt;

}