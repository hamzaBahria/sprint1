import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Professeur } from '../model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-add-professeur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-professeur.component.html',
  styleUrl: './add-professeur.component.css',
})
export class AddProfesseurComponent {
  newProfesseur = new Professeur();

  message!: string;

  constructor(private professeurService: ProfesseurService) {}

  addProfesseur() {
    //console.log(this.newProfesseur);
    this.professeurService.ajouterProfesseur(this.newProfesseur);
    this.message =
      'Professeur ' +
      this.newProfesseur.nomProfesseur +
      ' ajouté avec succes ! ';
  }
}
