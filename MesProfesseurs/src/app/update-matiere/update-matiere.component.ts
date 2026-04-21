import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Matiere } from '../model/matiere.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-matiere',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-matiere.component.html',
  styles: ``,
})
export class UpdateMatiereComponent implements OnInit {
  @Input()
  matiere!: Matiere;

  @Output()
  matiereUpdated = new EventEmitter<Matiere>();

  @Input()
  ajout!: boolean;

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateMatiere ', this.matiere);
  }

  saveMatiere() {
    this.matiereUpdated.emit(this.matiere);
  }
}
