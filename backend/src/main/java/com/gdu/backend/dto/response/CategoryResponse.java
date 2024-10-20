package com.gdu.backend.dto.response;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.gdu.backend.model.Category;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryResponse {
    private long id;
    private String name;
}
