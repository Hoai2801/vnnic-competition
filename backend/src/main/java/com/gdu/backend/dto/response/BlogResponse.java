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
public class BlogResponse {
    private Long id;
    private String title;
    private String category;
    private String excerpt;
    private String slug;
    private String date;
    private String coverImage;
    
    public static BlogResponse from(Blog blog) {
        return BlogResponse.builder()
                .id(blog.getId())
                .title(blog.getTitle())
                .category(blog.getCategory().getName())
                .excerpt(blog.getExcerpt())
                .slug(blog.getSlug())
                .date(blog.getCreatedAt().toString())
                .coverImage(blog.getCoverImage())
                .build();
    }
}
