import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Professeur } from '../model/professeur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesseurService } from '../services/professeur.service';
import { Matiere } from '../model/matiere.model';
import { Image } from '../model/image.model';
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

  myImage!: string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

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
    });
  }

  onAddImageProfesseur() {
    this.professeurService
      .uploadImageProf(
        this.uploadedImage,
        this.uploadedImage.name,
        this.currentProfesseur.idProfesseur,
      )
      .subscribe((img: Image) => {
        this.currentProfesseur.images.push(img);
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

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }
  supprimerImage(img: Image) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.professeurService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentProfesseur.images.indexOf(img, 0);
        if (index > -1) {
          this.currentProfesseur.images.splice(index, 1);
        }
      });
  }
}
