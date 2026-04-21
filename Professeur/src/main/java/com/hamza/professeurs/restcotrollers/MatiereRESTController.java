package com.hamza.professeurs.restcotrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamza.professeurs.Repository.MatiereRepository;
import com.hamza.professeurs.etities.Matiere;

@RestController
@RequestMapping("/api/mat")
@CrossOrigin("*")
public class MatiereRESTController {

    @Autowired
    MatiereRepository matiereRepository;//Dependency injection

    @GetMapping
    public List<Matiere> getAllMatiere(){
        return matiereRepository.findAll();
    }

    @GetMapping("/{id}")
    public Matiere getMatiereById(@PathVariable("id") Long id){
        return matiereRepository.findById(id).get();
    }
}
