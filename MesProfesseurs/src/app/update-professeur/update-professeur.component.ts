import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Professeur } from '../model/professeur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesseurService } from '../services/professeur.service';
import { Matiere } from '../model/matiere.model';

@Component({
  selector: 'app-update-professeur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-professeur.component.html',
  styles: ``,
})
export class UpdateProfesseurComponent implements OnInit {
  currentProfesseur = new Professeur();
  matieres!: Matiere[];
  updatedMatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private professeurService: ProfesseurService,
  ) {}

  ngOnInit(): void {
    this.professeurService
      .consulterProfesseur(this.activatedRoute.snapshot.params['id'])
      .subscribe((prof) => {
        this.currentProfesseur = prof;
        this.updatedMatId = this.currentProfesseur.matiere.idMat!;
      });
    this.professeurService.listeMatieres().subscribe((mats) => {
      this.matieres = mats._embedded.matieres;
      console.log(mats);
    });
  }

  updateProfesseur() {
    this.currentProfesseur.matiere = this.matieres.find(
      (mat) => mat.idMat == this.updatedMatId,
    )!;
    this.professeurService
      .updateProfesseur(this.currentProfesseur)
      .subscribe((prof) => {
        this.router.navigate(['professeurs']);
      });
  }
}
