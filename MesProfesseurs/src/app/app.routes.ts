import { Routes } from '@angular/router';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';
import { RechercheParMatiereComponent } from './recherche-par-matiere/recherche-par-matiere.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMatieresComponent } from './liste-matieres/liste-matieres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { professeurGuard } from './professeur.guard';

export const routes: Routes = [
  { path: 'professeurs', component: ProfesseursComponent },
  {
    path: 'add-professeur',
    component: AddProfesseurComponent,
    canActivate: [professeurGuard],
  },
  { path: 'updateProfesseur/:id', component: UpdateProfesseurComponent },
  { path: 'rechercheParMatiere', component: RechercheParMatiereComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listeMatieres', component: ListeMatieresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'professeurs', pathMatch: 'full' },
];
