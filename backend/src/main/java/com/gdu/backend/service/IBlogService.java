package com.gdu.backend.service;

import com.gdu.backend.dto.request.BlogRequest;
import com.gdu.backend.dto.response.BlogDetailResponse;
import com.gdu.backend.dto.response.BlogResponse;
import com.gdu.backend.model.Blog;

import java.io.IOException;
import java.util.List;

public interface IBlogService {
    List<BlogResponse> getLatestBlogs();

    List<BlogResponse> getBlogsByCategoryId(Long id, int limit);

    List<BlogResponse> searchBlogs(String keyword);

    void create(BlogRequest blog) throws IOException;

    BlogDetailResponse getBlogBySlug(String slug);

    List<BlogResponse> getRandomBlogs();
}
