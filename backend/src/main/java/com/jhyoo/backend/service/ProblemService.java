package com.jhyoo.backend.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jhyoo.backend.dto.ProblemDTO;
import com.jhyoo.backend.entity.Problem;
import com.jhyoo.backend.repository.ProblemRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    public Problem createProblem(String title, String description, String problemUrl, String field, int level, String nickname, String answer, String filePath) {
        Problem problem = new Problem();
        problem.setTitle(title);
        problem.setDescription(description);
        problem.setProblemUrl(problemUrl);
        problem.setField(field);
        problem.setLevel(level);
        problem.setCreatorIconUrl("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
        problem.setCreatorNickname(nickname);
        problem.setSolutionsCount(0);
        problem.setAnswer(answer);
        problem.setFilePath(filePath);
        this.problemRepository.save(problem);
        return problem;
    }

    public String handleFileUpload(MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get("src/main/resources/static/uploads/" + file.getOriginalFilename());
            Files.write(path, bytes);
            return path.toString();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public byte[] downloadFile(String fileName) throws IOException {
        Path filePath = Paths.get("src/main/resources/static/uploads/", fileName);
        return Files.readAllBytes(filePath);
    }
    
    @Cacheable(value = "ProblemAllCache")
    public List<ProblemDTO> getAllProblems() {
        List<Problem> problems = problemRepository.findAll();

        return problems.stream().map(this::getProblemDTO).collect(Collectors.toList());
    }

    @CacheEvict(value = "ProblemAllCache", allEntries = true)
    public String cacheReset() {
        return "Cache is reset";
    }

    @Cacheable(value = "ProblemCache")
    public ProblemDTO getProblem(Long problemId) {
        Problem problem = problemRepository.findById(problemId).orElse(null);
        if (problem == null) {
            return null;
        }

        return getProblemDTO(problem);
    }

    private ProblemDTO getProblemDTO(Problem problem) {
        return ProblemDTO.builder()
                .problemId(problem.getProblemId())
                .level(problem.getLevel())
                .title(problem.getTitle())
                .description(problem.getDescription())
                .problemUrl(problem.getProblemUrl())
                .field(problem.getField())
                .creatorIconUrl(problem.getCreatorIconUrl())
                .creatorNickname(problem.getCreatorNickname())
                .solutionsCount(problem.getSolutionsCount())
                .answer(problem.getAnswer())
                .filePath(problem.getFilePath())
                .build();
    }
}
