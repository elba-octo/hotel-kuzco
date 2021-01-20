import {expect} from 'chai'
import {ChercherChambreDisponible} from "../use_cases/ChercherChambreDisponible";
import {Chambre} from "../domain/Chambre";
import {ReservationRepository} from "../infrastructure/ReservationRepository";
import {Reservation} from "../domain/Reservation";
import {ChambreRepository} from "../infrastructure/ChambreRepository";

describe('Unit | Use case | ChercherChambreDisponible', () => {
    it('devrait retourner une liste de chambres disponibles', () => {
        // GIVEN
        const chambres = new Chambre(1, 1, 101, "1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible", 2);

        const chambresDisponiblesAttendues = [chambres];
        const dateDebut = new Date(2021, 1, 20);
        const dateFin = new Date(2021, 1, 22);
        const nombreVoyageurs = 2;

        // WHEN
        const resultat = new ChercherChambreDisponible(new ChambreRepositoryTest([chambres]), new ReservationRepositoryTest([])).execute(dateDebut, dateFin, nombreVoyageurs);
        // THEN
        expect(resultat).to.eql(chambresDisponiblesAttendues)
    });
});

class ReservationRepositoryTest implements ReservationRepository {
    private reservations: Reservation[]

    constructor(reservations: Reservation[]) {
        this.reservations = reservations
    }

    lister(): Reservation[] {
        return this.reservations;
    }
}

class ChambreRepositoryTest implements ChambreRepository {
    private chambres: Chambre[]

    constructor(chambres: Chambre[]) {
        this.chambres = chambres;
    }

    lister(): Chambre[] {
        return this.chambres;
    }

    listerParCapacite(nombreVoyageurs: number): Chambre[] {
        return this.chambres;
    }
}
