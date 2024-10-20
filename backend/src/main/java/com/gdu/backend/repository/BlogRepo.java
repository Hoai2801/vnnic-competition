package com.gdu.backend.repository;


import com.gdu.backend.model.Blog;
import io.micrometer.observation.ObservationFilter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {
    List<Blog> findAllByCategoryId(Long id);

    List<Blog> findTopByOrderByCreatedAtDesc(PageRequest pageable);

    Blog findBySlug(String slug);
}
