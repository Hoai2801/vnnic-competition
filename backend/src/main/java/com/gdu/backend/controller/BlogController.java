package com.gdu.backend.controller;

import com.gdu.backend.dto.request.BlogRequest;
import com.gdu.backend.dto.response.BlogDetailResponse;
import com.gdu.backend.dto.response.BlogResponse;
import com.gdu.backend.model.Blog;
import com.gdu.backend.service.IBlogService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/blog")
@RequiredArgsConstructor
@CrossOrigin
public class BlogController {
    private final IBlogService blogService;
    @GetMapping("/latest")
    public ResponseEntity<List<BlogResponse>> getLatestBlogs() {
        return ResponseEntity.ok(blogService.getLatestBlogs()); 
    }
    
    @GetMapping("/category/{id}")
    public ResponseEntity<List<Blog>> getBlogsByCategoryId(Long id) {
        return ResponseEntity.ok(blogService.getBlogsByCategoryId(id));
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<BlogResponse>> searchBlogs(String keyword) {
        log.info("keyword value: {}", keyword);
        return ResponseEntity.ok(blogService.searchBlogs(keyword));
    }
    
    @GetMapping("/{slug}")
    public ResponseEntity<BlogDetailResponse> getBlogBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(blogService.getBlogBySlug(slug));
    }
    
    @PostMapping("/create")
    public ResponseEntity<String> createBlog(BlogRequest blog) throws IOException {
        log.info("{}", blog);
        blogService.create(blog);
        return ResponseEntity.ok("Blog created successfully");
    }
}
