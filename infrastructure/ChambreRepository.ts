import {Chambre} from "../domain/Chambre";

export interface ChambreRepository  {
   lister():Chambre[]

   listerParCapacite(nombreVoyageurs: number): Chambre[]
}