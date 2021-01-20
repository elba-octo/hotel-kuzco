import {ChambreRepository} from "./ChambreRepository";
import {Chambre} from "../domain/Chambre";
import chambres from '../ressources/chambres.json'

export class JsonChambreRepository implements ChambreRepository {
    lister(): Chambre[] {
        return chambres.map(chambre => { return new Chambre(chambre.id, chambre.etage, chambre.chambre, chambre.description, chambre.capacite)});
    }

    listerParCapacite(nombreVoyageurs: number): Chambre[] {
        return this.lister().filter(chambre => chambre.capacite >= nombreVoyageurs)
    }
}