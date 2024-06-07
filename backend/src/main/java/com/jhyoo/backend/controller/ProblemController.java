package com.jhyoo.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.jhyoo.backend.entity.Problem;
import com.jhyoo.backend.service.ProblemService;

import lombok.RequiredArgsConstructor;

import java.io.IOException;

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

    @GetMapping("/download/{problem}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable("problem") String fileName) {
        try {
            byte[] fileContent = problemService.downloadFile(fileName);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", fileName);
            headers.setContentLength(fileContent.length);
            return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
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