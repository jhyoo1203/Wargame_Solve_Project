package com.jhyoo.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jhyoo.backend.service.ProblemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/problems")
public class ProblemController {
    private final ProblemService problemService;

    @RequestMapping("/all")
    public Object getAllProblems() {
        return problemService.getAllProblems();
    }

    @RequestMapping("/all/cache/reset")
    public String cacheReset() {
        return problemService.cacheReset();
    }
}
