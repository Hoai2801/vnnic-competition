package com.gdu.backend.controller;

import lombok.Getter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.GZIPOutputStream;

@RestController
@RequestMapping("/image")
public class ImageController {

    @GetMapping("/{imageName}")
    public ResponseEntity<byte[]> getImage(@PathVariable("imageName") String imageName) throws IOException {
        System.out.println("uncache");
        Path imagePath = Paths.get("src", "main", "resources", "static", "uploads", imageName);
        return getCompressedImageResponse(imagePath, MediaType.IMAGE_PNG);
    }

    private ResponseEntity<byte[]> getCompressedImageResponse(Path imagePath, MediaType mediaType) throws IOException {
        // Read the image file
        FileInputStream fis = new FileInputStream(imagePath.toFile());
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        GZIPOutputStream gzipOutputStream = new GZIPOutputStream(byteArrayOutputStream);

        // Compress the image file
        StreamUtils.copy(fis, gzipOutputStream);
        gzipOutputStream.close();

        // Set headers for gzip compression
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_ENCODING, "gzip");
        headers.add(HttpHeaders.CONTENT_TYPE, mediaType.toString());

        // Return the gzipped image bytes with appropriate headers
        return ResponseEntity.ok().headers(headers).body(byteArrayOutputStream.toByteArray());
    }
}
