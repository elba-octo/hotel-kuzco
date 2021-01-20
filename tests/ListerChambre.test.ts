import {expect} from 'chai'
import {Chambre} from '../domain/Chambre';
import {ListerChambre} from '../use_cases/ListerChambre';
import { ChambreRepository } from "../infrastructure/ChambreRepository";


describe('Unit | Use case | ListerChambre', () => {
    it('devrait retourner une liste de chambres', () => {
        // GIVEN
        const chambre = new Chambre(1, 1, 101, "1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible", 2);
        const resultatAttendu = [chambre];

        //WHEN
        const resultat = new ListerChambre(new ChambreRepositoryTest([chambre])).execute();
        //THEN
        expect(resultat).to.eql(resultatAttendu);
    })
});

class ChambreRepositoryTest implements ChambreRepository {
    private chambres: Chambre[]

    constructor(chambres: Chambre[]) {
        this.chambres = chambres;
    }

    lister(): Chambre[] {
        return this.chambres;
    }

    listerParCapacite(nombreVoyageurs: number) {
        return this.chambres;
    }

}