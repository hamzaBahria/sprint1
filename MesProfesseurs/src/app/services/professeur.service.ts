import { Injectable } from '@angular/core';
import { Professeur } from '../model/professeur.model';
@Injectable({
  providedIn: 'root',
})
export class ProfesseurService {
  professeurs: Professeur[];
  professeur!: Professeur;
  constructor() {
    this.professeurs = [
      {
        idProfesseur: 1,
        nomProfesseur: 'Hamza',
        salaireProfesseur: 3000.5,
        dateCreation: new Date('01/14/2025'),
      },
      {
        idProfesseur: 2,
        nomProfesseur: 'Ali',
        salaireProfesseur: 2500.0,
        dateCreation: new Date('12/17/2026'),
      },
      {
        idProfesseur: 3,
        nomProfesseur: 'Adem',
        salaireProfesseur: 1500.5,
        dateCreation: new Date('02/20/2026'),
      },
    ];
  }

  listeProfesseurs(): Professeur[] {
    return this.professeurs;
  }
  ajouterProfesseur(prof: Professeur) {
    this.professeurs.push(prof);
  }

  supprimerProfesseur(prof: Professeur) {
    //supprimer le produit prod du tableau produits
    const index = this.professeurs.indexOf(prof, 0);
    if (index > -1) {
      this.professeurs.splice(index, 1);
    }
    //ou Bien
    /* this.professeurs.forEach((cur, index) => {
    if(prof.idProfesseur === cur.idProfesseur) {
    this.idProfesseurs.splice(index, 1);
    }
    }); */
  }

  consulterProfesseur(id: number): Professeur {
    this.professeur = this.professeurs.find((p) => p.idProfesseur == id)!;
    return this.professeur;
  }

  updateProfesseur(prof: Professeur) {
    //chercher le produit prod du tableau produits
    const index = this.professeurs.indexOf(prof, 0);
    if (index > -1) {
      this.professeurs.splice(index, 1); //supprimer l'ancien éléments
      this.professeurs.splice(index, 0, prof); // insérer le nouvel élément
    }
  }
}
