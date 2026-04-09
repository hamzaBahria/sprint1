package com.hamza.professeurs.restcotrollers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.hamza.professeurs.etities.Professeur;
import com.hamza.professeurs.service.ProfesseurService;

import lombok.AllArgsConstructor;

//@RestController
//@RequestMapping("/api")
@CrossOrigin
@AllArgsConstructor
public class ProfesseurRESTController {
	
	//@Autowired
	private final ProfesseurService professeurService;
	
	//@RequestMapping(method=RequestMethod.GET)
	@GetMapping()
	List<Professeur> getAllProfesseurs(){
		return professeurService.getAllProfesseurs();
	}
	
	//@RequestMapping(value="/{id}",method=RequestMethod.GET)
	@GetMapping("/{id}")
	public Professeur getProfesseurById(@PathVariable("id") Long id) {
		return professeurService.getProfesseur(id);
	}
	
	@PostMapping()
	public Professeur createProfesseur(@RequestBody Professeur p) {
		return professeurService.saveProfesseur(p);
	}
	
	@PutMapping()
	public Professeur updateProfesseur(@RequestBody Professeur p) {
		return professeurService.saveProfesseur(p);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProfesseur(@PathVariable("id") Long id) {
		professeurService.deleteProfesseurById(id);
	}
	
	@GetMapping("/profsmat/{idMat}")
	public List<Professeur> getProfesseursByMatId(@PathVariable("idMat") Long idMat){
		return professeurService.findByMatiereIdMat(idMat);
	}
}
