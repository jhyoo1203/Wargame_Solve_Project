package com.jhyoo.backend.service;

import com.jhyoo.backend.dto.UserDTO;
import com.jhyoo.backend.entity.User;
import com.jhyoo.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Cacheable(value = "UserAllCache")
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();

        return users.stream().map(user -> {
            UserDTO userDTO = new UserDTO();

            userDTO.setUserId(user.getUserid());
            userDTO.setName(user.getName());
            userDTO.setNickname(user.getNickname());
            userDTO.setIconUrl(user.getIconUrl());
            userDTO.setAchievement(user.getAchievement());
            userDTO.setScore(user.getScore());
            return userDTO;
        }).collect(Collectors.toList());
    }

    @CacheEvict(value = "UserAllCache", allEntries = true)
    public String cacheReset() {
        return "Cache is reset";
    }
}
