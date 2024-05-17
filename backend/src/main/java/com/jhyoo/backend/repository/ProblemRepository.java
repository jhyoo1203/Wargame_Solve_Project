package com.jhyoo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jhyoo.backend.entity.Problem;

public interface ProblemRepository extends JpaRepository<Problem, Long>{
    
}
