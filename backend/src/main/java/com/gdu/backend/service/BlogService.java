package com.gdu.backend.service;

import com.gdu.backend.dto.request.BlogRequest;
import com.gdu.backend.dto.response.BlogDetailResponse;
import com.gdu.backend.dto.response.BlogResponse;
import com.gdu.backend.model.Blog;
import com.gdu.backend.model.Category;
import com.gdu.backend.repository.BlogRepo;
import com.gdu.backend.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.Normalizer;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class BlogService implements IBlogService {
    private static final String UPLOAD_DIR = "src/main/resources/static/uploads/";
    private final BlogRepo blogRepo;
    private final CategoryRepo categoryRepo;
    @Override
    public List<BlogResponse> getLatestBlogs() {
        PageRequest pageable = PageRequest.of(0, 8, Sort.by("id").descending());
        return blogRepo.findAll(pageable).stream().map(BlogResponse::from).toList();
    }

    @Override
    public List<BlogResponse> getBlogsByCategoryId(Long id, int limit) {
        PageRequest pageable = PageRequest.of(0, limit, Sort.by("id").descending());
        Page<BlogResponse> page = blogRepo.findAllByCategoryId(pageable, id);
        return page.getContent();
    }

    @Override
    public List<BlogResponse> searchBlogs(String keyword) {
        PageRequest pageable = PageRequest.of(0, 8, Sort.by("id").descending());
        if (keyword != null) {
            return blogRepo.findAllByTitleContainingOrContentContaining(keyword, pageable).stream().toList();
        }
        return List.of();
    }

    @Override
    public void create(BlogRequest blog) throws IOException {
        log.info("Blog created successfully: {}", blog);
        Category category = categoryRepo.findById(Long.parseLong(blog.getCategory()))
                .orElseThrow(() -> new RuntimeException("Category not found"));
        // save cover image
        String fileName = System.currentTimeMillis() + "_" + blog.getImage().getOriginalFilename();
        File destFile = new File(UPLOAD_DIR + fileName);
        MultipartFile multipartFile = blog.getImage();
        Path uploadDir = Paths.get(UPLOAD_DIR);
        Files.createDirectories(uploadDir);
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Files.copy(inputStream, destFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
        }
        
        // save blog
        Blog newBlog = Blog
                .builder()
                .title(blog.getTitle())
                .content(blog.getContent())
                .category(category)
                .createdAt(LocalDate.now())
                .excerpt(blog.getExcerpt())
                .coverImage(fileName)
                .slug(toSlug(blog.getTitle()))
                .build();
        blogRepo.save(newBlog);
    }

    @Override
    public BlogDetailResponse getBlogBySlug(String slug) {
        Blog blog = blogRepo.findBySlug(slug);
        return BlogDetailResponse.from(blog);
    }

    @Override
    public List<BlogResponse> getRandomBlogs(int limit) {
        return blogRepo.findRandomBlogs(limit);
    }

    public static String toSlug(String input) {
        // Normalize the string to decompose accents
        String normalized = Normalizer.normalize(input, Normalizer.Form.NFD);

        // Remove accents using a regular expression
        String slug = normalized.replaceAll("\\p{M}", "");

        // Convert to lowercase and replace spaces/punctuation with hyphens
        slug = slug.toLowerCase().replaceAll("[^a-z0-9\\s]", "").replaceAll("\\s+", "-");

        // Remove any leading or trailing hyphens
        slug = slug.replaceAll("^-|-$", "");

        return slug + "-" + new Date().getTime();
    }
}
