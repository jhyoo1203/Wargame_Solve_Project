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
    private Long userId;

    @Column(name="username", unique = true)
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="email")
    private String email;

    @Column(name="name")
    private String name;

    @Column(name="nickname")
    private String nickname;

    @Column(name="icon_url")
    private String iconUrl;

    @Column(name="achievement")
    private String achievement;

    @Column(name="score")
    private int score;
}