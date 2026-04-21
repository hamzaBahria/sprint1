import { Matiere } from './matiere.model';

export class MatiereWrapped {
  _embedded!: { matieres: Matiere[] };
}
