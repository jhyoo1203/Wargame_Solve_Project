package com.jhyoo.backend.service;

import com.jhyoo.backend.dto.UserDTO;
import com.jhyoo.backend.entity.User;
import com.jhyoo.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final String DEFAULT_ACHIEVEMENT = "뉴비";
    private final int DEFAULT_SCORE = 0;

    public User createUser(String username, String email, String nickname, String name, String password) {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setName(name);
        user.setNickname(nickname);
        user.setPassword(passwordEncoder.encode(password));
        user.setAchievement(DEFAULT_ACHIEVEMENT);
        user.setScore(DEFAULT_SCORE);
        this.userRepository.save(user);
        return user;
    }

    @Cacheable(value = "UserAllCache")
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();

        return users.stream().map(this::getUserDTO).collect(Collectors.toList());
    }

    @CacheEvict(value = "UserAllCache", allEntries = true)
    public String cacheReset() {
        return "Cache is reset";
    }

    @Cacheable(value = "UserCache")
    public UserDTO getUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return null;
        }

        return getUserDTO(user);
    }

    public UserDTO getUserDTO(User user) {
        return UserDTO.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .nickname(user.getNickname())
                .iconUrl(user.getIconUrl())
                .achievement(user.getAchievement())
                .score(user.getScore())
                .build();
    }
}
