import {ChambreRepository} from "./ChambreRepository";
import {Chambre} from "../domain/Chambre";

export class JsonChambreRepository implements ChambreRepository {
    lister(): Chambre[] {
    }
}