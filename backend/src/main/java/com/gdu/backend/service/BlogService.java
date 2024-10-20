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
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.print.Pageable;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.Normalizer;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    public List<Blog> getBlogsByCategoryId(Long id) {
        Category category = categoryRepo.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        PageRequest pageable = PageRequest.of(0, 8, Sort.by("id").descending());
        return blogRepo.findAllByCategoryId(id);
    }

    @Override
    public List<Blog> searchBlogs(String keyword) {
        return List.of();
    }

    @Override
    public BlogDetailResponse getBlogById(Long id) {
        return blogRepo.findById(id).map(BlogDetailResponse::from).orElseThrow(() -> new RuntimeException("Blog not found"));
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
