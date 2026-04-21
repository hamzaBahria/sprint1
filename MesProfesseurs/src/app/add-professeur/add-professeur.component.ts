import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Professeur } from '../model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';
import { Router } from '@angular/router';
import { Matiere } from '../model/matiere.model';

@Component({
  selector: 'app-add-professeur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-professeur.component.html',
  styleUrl: './add-professeur.component.css',
})
export class AddProfesseurComponent implements OnInit {
  newProfesseur = new Professeur();
  matieres!: Matiere[];
  newIdMat!: number;
  newMatiere!: Matiere;

  constructor(
    private professeurService: ProfesseurService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.professeurService.listeMatieres().subscribe((mats) => {
      this.matieres = mats._embedded.matieres;
      console.log(mats);
    });
  }

  addProfesseur() {
    this.newProfesseur.matiere = this.matieres.find(
      (mat) => mat.idMat == this.newIdMat,
    )!;

    this.professeurService
      .ajouterProfesseur(this.newProfesseur)
      .subscribe((prof) => {
        console.log(prof);
        this.router.navigate(['/professeurs']);
      });
  }
}
