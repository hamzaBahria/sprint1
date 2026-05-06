package com.hamza.professeurs.service;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.hamza.professeurs.etities.Image;

public interface ImageService {
	Image uplaodImage(MultipartFile file) throws IOException;

	Image getImageDetails(Long id) throws IOException;

	ResponseEntity<byte[]> getImage(Long id) throws IOException;
	
	Image uplaodImageProf(MultipartFile file,Long idProf) throws IOException;
	List<Image> getImagesParProf(Long profId);

	void deleteImage(Long id);
}