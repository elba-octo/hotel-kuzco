"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ChercherChambreDisponible_1 = require("../use_cases/ChercherChambreDisponible");
const Chambre_1 = require("../domain/Chambre");
describe('Unit | Use case | ChercherChambreDisponible', () => {
    it('devrait retourner une liste de chambres disponibles', () => {
        // GIVEN
        const chambres = new Chambre_1.Chambre(1, 1, 101, "1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible", 2);
        const chambresDisponiblesAttendues = [chambres];
        const dateDebut = new Date(2021, 1, 20);
        const dateFin = new Date(2021, 1, 22);
        const nombreVoyageurs = 2;
        // WHEN
        const resultat = new ChercherChambreDisponible_1.ChercherChambreDisponible(new ChambreRepositoryTest([chambres]), new ReservationRepositoryTest([])).execute(dateDebut, dateFin, nombreVoyageurs);
        // THEN
        chai_1.expect(resultat).to.eql(chambresDisponiblesAttendues);
    });
});
class ReservationRepositoryTest {
    constructor(reservations) {
        this.reservations = reservations;
    }
    lister() {
        return this.reservations;
    }
}
class ChambreRepositoryTest {
    constructor(chambres) {
        this.chambres = chambres;
    }
    lister() {
        return this.chambres;
    }
    listerParCapacite(nombreVoyageurs) {
        return this.chambres;
    }
}
