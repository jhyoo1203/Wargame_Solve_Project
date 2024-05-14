package com.jhyoo.backend.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;

    @Column(name="name")
    private String name;

    @Column(name="nickname")
    private String nickname;

    @Column(name="rank")
    private String rank;

    @Column(name="icon_url")
    private String iconUrl;

    @Column(name="achievement")
    private String achievement;

    @Column(name="score")
    private int score;
}