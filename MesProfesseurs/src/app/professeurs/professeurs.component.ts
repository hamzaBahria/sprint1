import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Professeur } from '../model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';
import { RouterLink } from '@angular/router';
import { Matiere } from '../model/matiere.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-professeurs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './professeurs.component.html',
  styleUrl: './professeurs.component.css',
})
export class ProfesseursComponent implements OnInit {
  professeurs!: Professeur[];

  constructor(
    private professeurService: ProfesseurService,
    public authService: AuthService,
  ) {
    // this.professeurs = professeurService.listeProfesseurs();
  }

  ngOnInit(): void {
    this.chargerProfesseur();
  }

  chargerProfesseur() {
    this.professeurService.listeProfesseur().subscribe((profs) => {
      console.log(profs);
      this.professeurs = profs;
    });
  }

  supprimerProfesseur(p: Professeur) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.professeurService
        .supprimerProfesseur(p.idProfesseur)
        .subscribe(() => {
          console.log('Professeur supprimé!');
          this.chargerProfesseur();
        });
  }
}
