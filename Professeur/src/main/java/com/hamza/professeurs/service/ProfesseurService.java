package com.hamza.professeurs.service;

import java.util.List;

import com.hamza.professeurs.etities.Matiere;
import com.hamza.professeurs.etities.Professeur;

public interface ProfesseurService {
	Professeur saveProfesseur(Professeur p);

	Professeur updateProfesseur(Professeur p);

	void deleteProfesseur(Professeur p);

	void deleteProfesseurById(Long id);

	Professeur getProfesseur(Long id);

	List<Professeur> getAllProfesseurs();

	List<Professeur> findByNomProfesseur(String nom);

	List<Professeur> findByNomProfessurContains(String nom);

	List<Professeur> findByNomSalaire(String nom, Double saliare);

	List<Professeur> findByMatiere(Matiere matiere);

	List<Professeur> findByMatiereIdMat(Long id);

	List<Professeur> findByOrderByNomProfesseurAsc();

	List<Professeur> trierProfesseursNomsSalaire();

}
