import { Injectable } from '@angular/core';
import { Professeur } from '../model/professeur.model';
import { Matiere } from '../model/matiere.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { MatiereWrapped } from '../model/MatiereWrapped';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfesseurService {
  professeurs!: Professeur[];
  professeur!: Professeur;
  matieres!: Matiere[];
  apiURLMat: string = 'http://localhost:8080/professeurs/mat';
  apiURL: string = 'http://localhost:8080/professeurs/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    // this.matieres = [
    //   { idMat: 1, nomMatiere: 'Math', description: 'this is math' },
    //   { idMat: 2, nomMatiere: 'Algo', description: 'this is algo' },
    // ];
    // this.professeurs = [
    //   {
    //     idProfesseur: 1,
    //     nomProfesseur: 'Hamza',
    //     salaireProfesseur: 3000.5,
    //     dateCreation: new Date('01/14/2025'),
    //     matiere: { idMat: 1, nomMatiere: 'Math', description: 'this is math' },
    //   },
    //   {
    //     idProfesseur: 2,
    //     nomProfesseur: 'Ali',
    //     salaireProfesseur: 2500.0,
    //     dateCreation: new Date('12/17/2026'),
    //     matiere: { idMat: 2, nomMatiere: 'Algo', description: 'this is algo' },
    //   },
    //   {
    //     idProfesseur: 3,
    //     nomProfesseur: 'Adem',
    //     salaireProfesseur: 1500.5,
    //     dateCreation: new Date('02/20/2026'),
    //     matiere: { idMat: 1, nomMatiere: 'Math', description: 'this is math' },
    //   },
    // ];
  }

  listeProfesseur(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(this.apiURL + '/all');
  }
  ajouterProfesseur(prof: Professeur): Observable<Professeur> {
    return this.http.post<Professeur>(this.apiURL + '/addprof', prof);
  }
  supprimerProfesseur(id: number) {
    const url = `${this.apiURL}/delprof/${id}`;

    return this.http.delete(url);
  }
  consulterProfesseur(id: number): Observable<Professeur> {
    const url = `${this.apiURL}/getbyid/${id}`;

    return this.http.get<Professeur>(url);
  }
  updateProfesseur(prof: Professeur): Observable<Professeur> {
    return this.http.put<Professeur>(this.apiURL + '/updateprof', prof);
  }

  listeMatieres(): Observable<MatiereWrapped> {
    return this.http.get<MatiereWrapped>(this.apiURLMat);
  }
  rechercherParMatiere(idMat: number): Observable<Professeur[]> {
    const url = `${this.apiURL}/profsmat/${idMat}`;
    return this.http.get<Professeur[]>(url);
  }
  rechercherParNom(nom: string): Observable<Professeur[]> {
    const url = `${this.apiURL}/profsByName/${nom}`;
    return this.http.get<Professeur[]>(url);
  }
  ajouterMatiere(mat: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(this.apiURLMat, mat, httpOptions);
  }
}
