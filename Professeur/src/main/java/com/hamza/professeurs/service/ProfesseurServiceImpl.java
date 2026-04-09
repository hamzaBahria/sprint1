package com.hamza.professeurs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hamza.professeurs.Repository.ProfesseurRepository;
import com.hamza.professeurs.etities.Matiere;
import com.hamza.professeurs.etities.Professeur;

@Service
public class ProfesseurServiceImpl implements ProfesseurService {

	@Autowired
	ProfesseurRepository professeurRepository;
	
	@Override
	public Professeur saveProfesseur(Professeur p) {
		return professeurRepository.save(p);
	}

	@Override
	public Professeur updateProfesseur(Professeur p) {
		return professeurRepository.save(p);
	}

	@Override
	public void deleteProfesseur(Professeur p) {
		professeurRepository.delete(p);
		
	}

	@Override
	public void deleteProfesseurById(Long id) {
		professeurRepository.deleteById(id);
		
	}

	@Override
	public Professeur getProfesseur(Long id) {
		
		return professeurRepository.findById(id).get();
	}

	@Override
	public List<Professeur> getAllProfesseurs() { 
		return professeurRepository.findAll();
	}

	@Override
	public List<Professeur> findByNomProfesseur(String nom) {
		return professeurRepository.findByNomProfesseur(nom);
	}

	@Override
	public List<Professeur> findByNomProfessurContains(String nom) {
		return professeurRepository.findByNomProfesseurContains(nom);
	}

	@Override
	public List<Professeur> findByNomSalaire(String nom, Double saliare) {
		return professeurRepository.findByNomProfesseurContains(nom);
	}

	@Override
	public List<Professeur> findByMatiere(Matiere matiere) {
		return professeurRepository.findByMatiere(matiere);
	}

	@Override
	public List<Professeur> findByMatiereIdMat(Long id) {
		return professeurRepository.findByMatiereIdMat(id);
	}

	@Override
	public List<Professeur> findByOrderByNomProfesseurAsc() {
		return professeurRepository.findByOrderByNomProfesseurAsc();
	}

	@Override
	public List<Professeur> trierProfesseursNomsSalaire() {
		return professeurRepository.trierProfesseursNomsSalaire();
	}

}
