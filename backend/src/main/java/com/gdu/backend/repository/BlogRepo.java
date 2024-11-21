package com.gdu.backend.repository;


import com.gdu.backend.dto.response.BlogResponse;
import com.gdu.backend.model.Blog;
import io.micrometer.observation.ObservationFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {
    @Query("SELECT new com.gdu.backend.dto.response.BlogResponse(b.id, b.title, b.category.name, b.excerpt, b.slug, b.createdAt, b.coverImage) " +
            "FROM Blog b WHERE b.category.id = :id")
    Page<BlogResponse> findAllByCategoryId(Pageable pageable, @Param("id") Long id);

    

    Blog findBySlug(String slug);

    @Query("SELECT new com.gdu.backend.dto.response.BlogResponse(b.id, b.title, b.category.name, b.excerpt, b.slug, b.createdAt, b.coverImage) " +
            "FROM Blog b WHERE b.title LIKE %:keyword% OR b.content LIKE %:keyword%")
    List<BlogResponse> findAllByTitleContainingOrContentContaining(@Param("keyword") String keyword, Pageable pageable);

//    @Query("SELECT b FROM Blog b ORDER BY RAND() LIMIT :limit")
    @Query("SELECT new com.gdu.backend.dto.response.BlogResponse(b.id, b.title, b.category.name, b.excerpt, b.slug, b.createdAt, b.coverImage) FROM Blog b ORDER BY RAND() LIMIT :limit")
    List<BlogResponse> findRandomBlogs(@Param("limit") int limit);
}
