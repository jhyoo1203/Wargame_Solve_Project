package com.jhyoo.backend.controller;

import com.jhyoo.backend.dto.UserDTO;
import com.jhyoo.backend.entity.User;
import com.jhyoo.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public UserDTO signup(@RequestBody UserDTO userDTO) {
        User user = userService.createUser(userDTO.getUsername(), userDTO.getEmail(), userDTO.getNickname(), userDTO.getName(), userDTO.getPassword());
        return userService.getUserDTO(user);
    }

    @GetMapping("/all")
    public List<UserDTO> getAllSchedules() {
        return userService.getAllUsers();
    }

    @GetMapping("/all/cache/reset")
    public String cacheReset() {
        return userService.cacheReset();
    }
}
