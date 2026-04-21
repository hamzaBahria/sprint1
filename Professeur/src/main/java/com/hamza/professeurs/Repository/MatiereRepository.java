package com.hamza.professeurs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.hamza.professeurs.etities.Matiere;

@RepositoryRestResource(path = "mat")
@CrossOrigin(origins = "http://localhost:4200/") //pour autoriser angular
public interface MatiereRepository extends JpaRepository<Matiere, Long> {

}
