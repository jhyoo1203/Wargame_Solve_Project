package com.jhyoo.backend.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "problems")
@Getter
@Setter
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long problemId;

    @Column(name="level")
    private int level;

    @Column(name="title")
    private String title;

    @Column(name="field")
    private String field;

    @Column(name="creator_icon_url")
    private String creatorIconUrl;

    @Column(name="creator_nickname")
    private String creatorNickname;

    @Column(name="solutions_count")
    private int solutionsCount;
}