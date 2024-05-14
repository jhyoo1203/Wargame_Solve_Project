package com.jhyoo.backend.controller;

import com.jhyoo.backend.dto.UserDTO;
import com.jhyoo.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/all")
    public List<UserDTO> getAllSchedules() {
        return userService.getAllUsers();
    }

    @GetMapping("/all/cache/reset")
    public String cacheReset() {
        return userService.cacheReset();
    }
}
