import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Professeur } from '../model/professeur.model';
import { Matiere } from '../model/matiere.model';
import { ProfesseurService } from '../services/professeur.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-matiere',
  standalone: true,
  imports: [DatePipe, FormsModule, CommonModule],
  templateUrl: './recherche-par-matiere.component.html',
  styles: ``,
})
export class RechercheParMatiereComponent implements OnInit {
  professeurs!: Professeur[];
  IdMatiere!: number;
  matieres!: Matiere[];

  constructor(private professeurService: ProfesseurService) {}

  ngOnInit(): void {
    this.professeurService.listeMatieres().subscribe((mat) => {
      this.matieres = mat._embedded.matieres;
    });
  }

  onChange() {
    this.professeurService
      .rechercherParMatiere(this.IdMatiere)
      .subscribe((profs) => {
        this.professeurs = profs;
      });
  }
}
