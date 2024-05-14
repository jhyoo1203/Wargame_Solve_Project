package com.jhyoo.backend.dto;

import com.jhyoo.backend.entity.Problem;
import com.jhyoo.backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SolutionDTO {
    private Long solutionId;
    private Problem problem;
    private User user;
    private Date dateSubmitted;
    private String solutionText;
}
