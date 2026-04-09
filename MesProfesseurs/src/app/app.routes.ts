import { Routes } from '@angular/router';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';

export const routes: Routes = [
  { path: 'professeurs', component: ProfesseursComponent },
  { path: 'add-professeur', component: AddProfesseurComponent },
  { path: 'updateProfesseur/:id', component: UpdateProfesseurComponent },
  { path: '', redirectTo: 'professeurs', pathMatch: 'full' },
];
