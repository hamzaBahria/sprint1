package com.hamza.professeurs.etities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Professeur {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProfesseur;
	private String nomProfesseur;
	private double salaireProfesseur;
	private Date dateCreation;
	private String imagePath;
	
	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	@OneToMany (mappedBy = "professeur")
	 private List<Image> images;
	
	/*
	 @OneToOne
	 private Image image;
	*/
	
	@ManyToOne
	private Matiere matiere;
	
	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public Professeur(String nomProfesseur, double salaireProfesseur, Date dateCreation) {
		super();
		this.nomProfesseur = nomProfesseur;
		this.salaireProfesseur = salaireProfesseur;
		this.dateCreation = dateCreation;
	}
	
	public Professeur() {
		super();
	}
	
	public Long getIdProfesseur() {
		return idProfesseur;
	}
	public void setIdProfesseur(Long idProfesseur) {
		this.idProfesseur = idProfesseur;
	}
	public String getNomProfesseur() {
		return nomProfesseur;
	}
	public void setNomProfesseur(String nomProfesseur) {
		this.nomProfesseur = nomProfesseur;
	}
	public double getSalaireProfesseur() {
		return salaireProfesseur;
	}
	public void setSalaireProfesseur(double salaireProfesseur) {
		this.salaireProfesseur = salaireProfesseur;
	}
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}
	
	
	
	public Matiere getMatiere() {
		return matiere;
	}

	public void setMatiere(Matiere matiere) {
		this.matiere = matiere;
	}

	@Override
	public String toString() {
		return "Professeur [idProfesseur=" + idProfesseur + ", nomProfesseur=" + nomProfesseur + ", salaireProfesseur="
				+ salaireProfesseur + ", dateCreation=" + dateCreation + "]";
	}
	
	
}
