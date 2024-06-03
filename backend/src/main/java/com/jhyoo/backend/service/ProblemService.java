package com.jhyoo.backend.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import com.jhyoo.backend.dto.ProblemDTO;
import com.jhyoo.backend.entity.Problem;
import com.jhyoo.backend.repository.ProblemRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;

    public Problem createProblem(String title, String description, String problemUrl, String field, int level, String nickname) {
        Problem problem = new Problem();
        problem.setTitle(title);
        problem.setDescription(description);
        problem.setProblemUrl(problemUrl);
        problem.setField(field);
        problem.setLevel(level);
        problem.setCreatorIconUrl("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
        problem.setCreatorNickname(nickname);
        problem.setSolutionsCount(0);
        this.problemRepository.save(problem);
        return problem;
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
                .build();
    }
}
