import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Professeur } from '../model/professeur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-update-professeur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-professeur.component.html',
  styles: ``,
})
export class UpdateProfesseurComponent implements OnInit {
  currentProfesseur = new Professeur();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private professeurService: ProfesseurService,
  ) {}

  ngOnInit(): void {
    this.currentProfesseur = this.professeurService.consulterProfesseur(
      this.activatedRoute.snapshot.params['id'],
    );
    console.log(this.currentProfesseur);
  }

  updateProfesseur() {
    //console.log(this.currentProfesseur);
    this.professeurService.updateProfesseur(this.currentProfesseur);
    this.router.navigate(['professeurs']);
  }
}
