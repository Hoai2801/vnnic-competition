package com.gdu.backend.service;

import com.gdu.backend.dto.request.CategoryRequest;
import com.gdu.backend.model.Category;
import com.gdu.backend.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService {
    private final CategoryRepo categoryRepo;

    @Override
    public Category getCategoryById(long id) {
        return categoryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public Category create(CategoryRequest category) {
        Category newCategory = Category
                .builder()
                .name(category.getName())
                .build();
        return categoryRepo.save(newCategory);
    }

    @Override
    public Category update(CategoryRequest categoryRequest, long id) {
        Category existingCategory = getCategoryById(id);
        existingCategory.setName(categoryRequest.getName());
        categoryRepo.save(existingCategory);
        return existingCategory;
    }

    @Override
    public void delete(long id) {
        categoryRepo.deleteById(id);
    }
}
