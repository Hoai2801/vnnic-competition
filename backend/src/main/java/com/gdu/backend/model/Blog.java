package com.gdu.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Lob
    @Column(name = "content", nullable = false)
    private String content;
    
    private String slug;
    
    private String excerpt;
    
    @Column(name = "cover_image")
    private String coverImage;

    @NotNull
    @JoinColumn(name = "category", nullable = false)
    @ManyToOne
    private Category category;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;
}