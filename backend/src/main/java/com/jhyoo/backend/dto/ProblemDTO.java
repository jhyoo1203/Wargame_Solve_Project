package com.jhyoo.backend.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
public class ProblemDTO {
    private Long problemId;
    private int level;
    private String title;
    private String description;
    private String problemUrl;
    private String field;
    private String creatorIconUrl;
    private String creatorNickname;
    private int solutionsCount;
    private String answer;
    
    public ProblemDTO(Long problemId, int level, String title, String description, String problemUrl, String field, String creatorIconUrl, String creatorNickname, int solutionsCount, String answer) {
        this.problemId = problemId;
        this.level = level;
        this.title = title;
        this.description = description;
        this.problemUrl = problemUrl;
        this.field = field;
        this.creatorIconUrl = creatorIconUrl;
        this.creatorNickname = creatorNickname;
        this.solutionsCount = solutionsCount;
        this.answer = answer;
    }
}

