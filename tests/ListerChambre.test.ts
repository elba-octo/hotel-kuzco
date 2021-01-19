import { expect } from 'chai'
import { Chambre } from '../domain/Chambre';
import { ListerChambre } from '../use_cases/ListerChambre';

describe('Unit | Use case | ListerChambre', () => {
    it('devrait retourner une liste de chambres', () => {
        // GIVEN
        const chambre = new Chambre(1, 101, "1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible", 2);
        const resultatAttendu = [chambre]
        //WHEN
        const resultat = new ListerChambre().execute();
        //THEN
        expect(resultat).to.eql(resultatAttendu)
    })
});