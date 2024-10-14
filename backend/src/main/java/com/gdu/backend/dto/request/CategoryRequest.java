package com.gdu.backend.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class CategoryRequest {
    @NotEmpty(message = "Category's not empty")
    private String name;
}
