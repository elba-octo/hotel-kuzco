"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Chambre_1 = require("../domain/Chambre");
const ListerChambre_1 = require("../use_cases/ListerChambre");
describe('Unit | Use case | ListerChambre', () => {
    it('devrait retourner une liste de chambres', () => {
        // GIVEN
        const chambre = new Chambre_1.Chambre(1, 1, 101, "1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible", 2);
        const resultatAttendu = [chambre];
        //WHEN
        const resultat = new ListerChambre_1.ListerChambre(new ChambreRepositoryTest([chambre])).execute();
        //THEN
        chai_1.expect(resultat).to.eql(resultatAttendu);
    });
});
class ChambreRepositoryTest {
    constructor(chambres) {
        this.chambres = chambres;
    }
    lister() {
        return this.chambres;
    }
}
