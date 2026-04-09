package com.hamza.professeurs;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hamza.professeurs.Repository.ProfesseurRepository;
import com.hamza.professeurs.etities.Matiere;
import com.hamza.professeurs.etities.Professeur;

@SpringBootTest
class ProfesseurApplicationTests {

	@Autowired
	ProfesseurRepository p;

	@Test
	void createProfTest() {
		p.save(new Professeur("ali", 3000, new Date()));
	}

	@Test
	public void testFindProf() {
		System.out.println(p.findById(2L).get());
	}

	@Test
	public void testUpdateProf() {
		Professeur prof = p.findById(1L).get();
		prof.setSalaireProfesseur(9999);
		p.save(prof);
	}

	@Test
	public void testDeleteProf() {
		p.deleteById(1L);
	}

	@Test
	public void testFindAllProfs() {
		List<Professeur> profs = p.findAll();
		for (Professeur p : profs) {
			System.out.println(p);
		}
	}

	@Test
	public void testFindByNomProfesseur() {
		List<Professeur> prods = p.findByNomProfesseur("ali");
		for (Professeur p : prods) {
			System.out.println(p);
		}
	}

	@Test
	public void testFindByNomProfesseurContains() {
		List<Professeur> prods = p.findByNomProfesseur("ali");
		for (Professeur p : prods) {
			System.out.println(p);
		}
	}

	@Test
	public void testfindByMatiere() {
		Matiere cat = new Matiere();
		cat.setIdMat(1L);
		List<Professeur> prods = p.findByMatiere(cat);
		for (Professeur p : prods) {
			System.out.println(p);
		}
	}

	@Test
	public void testfindByMatiereIdMatiere() {
		List<Professeur> prods = p.findByMatiereIdMat(1L);
		for (Professeur p : prods) {
			System.out.println(p);
		}

	}

	@Test
	public void testfindByOrderByNomProfesseurAsc() {
		List<Professeur> prods = p.findByOrderByNomProfesseurAsc();
		for (Professeur p : prods) {
			System.out.println(p);
		}
	}

	@Test
	public void testTrierProfessseursNomsSalaire() {
		List<Professeur> prods = p.trierProfesseursNomsSalaire();
		for (Professeur p : prods) {
			System.out.println(p);
		}
	}
}
