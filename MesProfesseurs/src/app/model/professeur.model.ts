import { Matiere } from './matiere.model';
import { Image } from './image.model';
export class Professeur {
  idProfesseur!: number;
  nomProfesseur!: string;
  salaireProfesseur!: number;
  dateCreation!: Date;
  matiere!: Matiere;
  image!: Image;
  imageStr!: string;
  images!: Image[];
}
