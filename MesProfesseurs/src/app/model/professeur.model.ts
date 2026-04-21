import { Matiere } from './matiere.model';

export class Professeur {
  idProfesseur!: number;
  nomProfesseur!: string;
  salaireProfesseur!: number;
  dateCreation!: Date;
  matiere!: Matiere;
}
