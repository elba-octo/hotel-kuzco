import {Chambre} from "../domain/Chambre";

export class ChambreRepository  {
   protected listerChambres(chambres: Chambre[]) {
      return [chambres];
   }
}