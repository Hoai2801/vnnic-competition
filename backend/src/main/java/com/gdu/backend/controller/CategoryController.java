package com.gdu.backend.controller;

import com.gdu.backend.dto.request.CategoryRequest;
import com.gdu.backend.dto.response.CategoryResponse;
import com.gdu.backend.model.Category;
import com.gdu.backend.service.ICategoryService;
import com.gdu.backend.utils.MessageKeys;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categories")
@FieldDefaults(makeFinal = true)
@RequiredArgsConstructor
public class CategoryController {
    private ICategoryService categoryService;

    @PostMapping("")
    public ResponseEntity<CategoryResponse> createCategory(
            @Valid @RequestBody CategoryRequest categoryRequest, BindingResult result) {
        CategoryResponse categoryResponse = new CategoryResponse();
        if (result.hasErrors()) {
            List<String> errorMessages = result.getFieldErrors()
                    .stream()
                    .map(FieldError::getDefaultMessage)
                    .toList();
            categoryResponse.setErrors(errorMessages);
            return ResponseEntity.badRequest().body(categoryResponse);
        }
        Category category = categoryService.create(categoryRequest);
        categoryResponse.setCategory(category);
        categoryResponse.setMessage(MessageKeys.INSERT_CATEGORY_SUCCESSFULLY);
        return ResponseEntity.ok(categoryResponse);
    }


    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryResponse> updateCategory(
            @PathVariable Long id,
            @Valid @RequestBody CategoryRequest categoryRequest
    ) {
        CategoryResponse updateCategoryResponse = new CategoryResponse();
        categoryService.update(categoryRequest, id);
        updateCategoryResponse.setMessage(MessageKeys.UPDATE_CATEGORY_SUCCESSFULLY);
        return ResponseEntity.ok(updateCategoryResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.ok(MessageKeys.DELETE_CATEGORY_SUCCESSFULLY);
    }

}
