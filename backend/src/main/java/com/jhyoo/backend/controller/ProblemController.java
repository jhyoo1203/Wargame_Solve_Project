package com.jhyoo.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.jhyoo.backend.entity.Problem;
import com.jhyoo.backend.service.ProblemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/problems")
public class ProblemController {
    private final ProblemService problemService;
    private final ObjectMapper objectMapper;

    @PostMapping("/create")
    public Object createProblem(@RequestParam("problem") String problemJson, @RequestPart("file") MultipartFile file) throws Exception {
        Problem problemDto = objectMapper.readValue(problemJson, Problem.class);
        String filePath = null;
        if (file != null) {
            filePath = problemService.handleFileUpload(file);
        }
        return problemService.createProblem(
                problemDto.getTitle(),
                problemDto.getDescription(),
                problemDto.getProblemUrl(),
                problemDto.getField(),
                problemDto.getLevel(),
                problemDto.getCreatorNickname(),
                problemDto.getAnswer(),
                filePath
        );
    }


    @RequestMapping("/all")
    public Object getAllProblems() {
        return problemService.getAllProblems();
    }

    @RequestMapping("/all/cache/reset")
    public String cacheReset() {
        return problemService.cacheReset();
    }

    @GetMapping("/{problemId}")
    public Object getProblem(@PathVariable("problemId") Long problemId) {
        return problemService.getProblem(problemId);
    }
}