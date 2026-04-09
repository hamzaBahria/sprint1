import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Professeur } from '../model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professeurs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './professeurs.component.html',
  styleUrl: './professeurs.component.css',
})
export class ProfesseursComponent {
  professeurs: Professeur[];

  constructor(private professeurService: ProfesseurService) {
    this.professeurs = professeurService.listeProfesseurs();
  }

  supprimerProfesseur(p: Professeur) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.professeurService.supprimerProfesseur(p);
  }
}
