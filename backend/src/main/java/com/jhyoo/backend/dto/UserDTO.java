package com.jhyoo.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private long userId;
    private String name;
    private String nickname;
    private String rank;
    private String iconUrl;
    private String achievement;
    private int score;
}
