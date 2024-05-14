package com.jhyoo.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProblemDTO {
    private Long problemId;
    private int level;
    private String title;
    private String field;
    private String creatorIconUrl;
    private String creatorNickname;
    private int solutionsCount;
}

