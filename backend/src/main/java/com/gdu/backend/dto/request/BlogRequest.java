package com.gdu.backend.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class BlogRequest {
    private String title;
    private String content;
    private String category;
    private String excerpt;
    private MultipartFile image;
}
