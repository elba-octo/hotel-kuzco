import {Chambre} from "../domain/Chambre";
import {ChambreRepository} from "../infrastructure/ChambreRepository";
import {ReservationRepository} from "../infrastructure/ReservationRepository";

export class ChercherChambreDisponible {
    private chambreRepository: ChambreRepository;
    private reservationRepository: ReservationRepository;

    constructor(chambreRepository: ChambreRepository, reservationRepository: ReservationRepository) {
        this.chambreRepository = chambreRepository;
        this.reservationRepository = reservationRepository;
    }

    execute(dateDebut: Date, dateFin: Date, nombreVoyageurs: number): Chambre[] {
        const reservations = this.reservationRepository.lister();
        const chambresParCapacite = this.chambreRepository.listerParCapacite(nombreVoyageurs);
        const reservationsQuiSeChevauchent = reservations.filter(reservation => (reservation.dateDebut <= dateFin) && (reservation.dateFin >= dateDebut));
        const numerosChambreARetirer = reservationsQuiSeChevauchent.map(reservation => reservation.numeroChambre);

        const chambresDisponibles = chambresParCapacite.filter(chambre => this.filtrerLesNumeroDeChambre(chambre.numeroChambre, numerosChambreARetirer))
        console.log(chambresDisponibles)
        return chambresDisponibles;
    }

    filtrerLesNumeroDeChambre(numeroChambre: number, numeroARetirer: number[]) {
        return !numeroARetirer.includes(numeroChambre)
    }
}