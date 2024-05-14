package com.jhyoo.backend.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name = "solutions")
@Getter
@Setter
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long solutionId;

    @ManyToOne
    @JoinColumn(name = "problem_id", referencedColumnName = "problemId")
    private Problem problem;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userid")
    private User user;

    @Column(name="date_submitted")
    private Date dateSubmitted;

    @Column(name="solution_text")
    private String solutionText;
}