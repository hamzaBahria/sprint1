package com.hamza.professeurs.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hamza.professeurs.etities.Matiere;
import com.hamza.professeurs.etities.Professeur;

@RepositoryRestResource(path = "rest")
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {
	List<Professeur> findByNomProfesseur(String nom);

	List<Professeur> findByNomProfesseurContains(String nom);

	@Query("select p from Professeur p where p.matiere = ?1")
	List<Professeur> findByMatiere(Matiere matiere);

	List<Professeur> findByMatiereIdMat(Long id);

	List<Professeur> findByOrderByNomProfesseurAsc();

	@Query("select p from Professeur p order by p.nomProfesseur ASC, p.salaireProfesseur DESC")
	List<Professeur> trierProfesseursNomsSalaire();

	

}
