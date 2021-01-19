import { Chambre } from "../domain/Chambre";
import { ChambreRepository } from "../infrastructure/ChambreRepository";

export class ListerChambre {
    private chambreRepository: ChambreRepository

    constructor(chambreRepository : ChambreRepository) {
        this.chambreRepository = chambreRepository
    }

    execute(): Chambre[] {
        return this.chambreRepository.lister()
    }
}