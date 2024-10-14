package com.gdu.backend.service;

import com.gdu.backend.dto.request.CategoryRequest;
import com.gdu.backend.model.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICategoryService {
    Category getCategoryById(long id);
    List<Category> getAllCategories();
    Category create(CategoryRequest category);
    Category update(CategoryRequest categoryRequest, long id);
    void delete(long id);
}
