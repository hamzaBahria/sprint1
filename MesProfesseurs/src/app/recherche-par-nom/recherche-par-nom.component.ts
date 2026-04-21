import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../services/professeur.service';
import { Professeur } from '../model/professeur.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``,
})
export class RechercheParNomComponent implements OnInit {
  nomProfesseur!: string;
  professeurs!: Professeur[];
  allProfesseurs!: Professeur[];
  searchTerm!: string;

  constructor(private professeurServive: ProfesseurService) {}

  ngOnInit(): void {
    this.professeurServive.listeProfesseur().subscribe((profs) => {
      console.log(profs);
      this.professeurs = profs;
    });
  }

  rechercherProfs() {
    if (this.nomProfesseur)
      //ou bien (this.nomProfesseur!=="")
      this.professeurServive
        .rechercherParNom(this.nomProfesseur)
        .subscribe((prods) => {
          console.log(prods);
          this.professeurs = prods;
        });
    else
      this.professeurServive.listeProfesseur().subscribe((profs) => {
        console.log(profs);
        this.professeurs = profs;
      });
  }

  onKeyUp(filterText: string) {
    this.professeurs = this.allProfesseurs.filter((item) =>
      item.nomProfesseur.toLowerCase().includes(filterText),
    );
  }
}
