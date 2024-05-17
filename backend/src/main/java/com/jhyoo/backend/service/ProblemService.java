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
    
    @Cacheable(value = "ProblemAllCache")
    public List<ProblemDTO> getAllProblems() {
        List<Problem> problems = problemRepository.findAll();

        return problems.stream().map(problem -> {
            ProblemDTO problemDTO = new ProblemDTO();

            problemDTO.setProblemId(problem.getProblemId());
            problemDTO.setTitle(problem.getTitle());
            problemDTO.setLevel(problem.getLevel());
            problemDTO.setField(problem.getField());
            problemDTO.setCreatorIconUrl(problem.getCreatorIconUrl());
            problemDTO.setCreatorNickname(problem.getCreatorNickname());
            problemDTO.setSolutionsCount(problem.getSolutionsCount());
            return problemDTO;
        }).collect(Collectors.toList());
    }

    @CacheEvict(value = "ProblemAllCache", allEntries = true)
    public String cacheReset() {
        return "Cache is reset";
    }
}
