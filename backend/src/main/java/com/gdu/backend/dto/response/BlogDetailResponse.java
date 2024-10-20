package com.gdu.backend.dto.response;

import com.gdu.backend.model.Blog;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlogDetailResponse {
    private Long id;
    private String title;
    private String category;
    private String content;
    private String excerpt; 
    private String slug;
    private String date;
    private String coverImage;

    public static BlogDetailResponse from(Blog blog) {
        return BlogDetailResponse.builder()
                .id(blog.getId())
                .title(blog.getTitle())
                .category(blog.getCategory().getName())
                .content(blog.getContent())
                .excerpt(blog.getExcerpt())
                .slug(blog.getSlug())
                .date(blog.getCreatedAt().toString())
                .coverImage(blog.getCoverImage())
                .build();
    }
}
