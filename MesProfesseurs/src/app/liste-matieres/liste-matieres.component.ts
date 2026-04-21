import { Component } from '@angular/core';
import { Matiere } from '../model/matiere.model';
import { ProfesseurService } from '../services/professeur.service';
import { UpdateMatiereComponent } from '../update-matiere/update-matiere.component';

@Component({
  selector: 'app-liste-matieres',
  standalone: true,
  imports: [UpdateMatiereComponent],
  templateUrl: './liste-matieres.component.html',
  styles: ``,
})
export class ListeMatieresComponent {
  matieres!: Matiere[];
  updatedMat: Matiere = { idMat: null, nomMatiere: '', description: '' };

  ajout: boolean = true;

  constructor(private professeurService: ProfesseurService) {}

  ngOnInit(): void {
    this.professeurService.listeMatieres().subscribe((mats) => {
      this.matieres = mats._embedded.matieres;
      console.log(mats);
    });
  }

  matiereUpdated(mat: Matiere) {
    console.log('mat updated event', mat);
    this.professeurService
      .ajouterMatiere(mat)
      .subscribe(() => this.chargerMatieres());
  }

  chargerMatieres() {
    this.professeurService.listeMatieres().subscribe((mats) => {
      this.matieres = mats._embedded.matieres;
      console.log(mats);
    });
  }

  updateMat(mat: Matiere) {
    this.updatedMat = mat;
    this.ajout = false;
  }
}
