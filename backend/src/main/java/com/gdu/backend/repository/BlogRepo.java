package com.gdu.backend.repository;


import com.gdu.backend.dto.response.BlogResponse;
import com.gdu.backend.model.Blog;
import io.micrometer.observation.ObservationFilter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.Collection;
import java.util.List;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {
    List<Blog> findAllByCategoryId(PageRequest pageable, Long id);

    List<Blog> findTopByOrderByCreatedAtDesc(PageRequest pageable);

    Blog findBySlug(String slug);

    @Query("select b from Blog b where b.title like %?1% or b.content like %?1%")
    List<BlogResponse> findAllByTitleContainingOrContentContaining(String keyword, PageRequest pageable);
}
