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
    private String field;
    private String creatorIconUrl;
    private String creatorNickname;
    private int solutionsCount;
    
    public ProblemDTO(Long problemId, int level, String title, String field, String creatorIconUrl, String creatorNickname, int solutionsCount) {
        this.problemId = problemId;
        this.level = level;
        this.title = title;
        this.field = field;
        this.creatorIconUrl = creatorIconUrl;
        this.creatorNickname = creatorNickname;
        this.solutionsCount = solutionsCount;
    }
}

