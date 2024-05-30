package com.jhyoo.backend.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
public class UserDTO {
    private long userId;
    private String username;
    private String password;
    private String email;
    private String name;
    private String nickname;
    private String iconUrl;
    private String achievement;
    private int score;

    public UserDTO(long userId, String username, String password, String email, String name, String nickname, String iconUrl, String achievement, int score) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.iconUrl = iconUrl;
        this.achievement = achievement;
        this.score = score;
    }
}
