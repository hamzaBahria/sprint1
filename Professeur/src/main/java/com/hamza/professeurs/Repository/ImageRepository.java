package com.hamza.professeurs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hamza.professeurs.etities.Image;

public interface ImageRepository extends JpaRepository<Image , Long> {
}