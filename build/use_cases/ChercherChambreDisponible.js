"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChercherChambreDisponible = void 0;
class ChercherChambreDisponible {
    constructor(chambreRepository, reservationRepository) {
        this.chambreRepository = chambreRepository;
        this.reservationRepository = reservationRepository;
    }
    execute(dateDebut, dateFin, nombreVoyageurs) {
        const reservations = this.reservationRepository.lister();
        const chambresParCapacite = this.chambreRepository.listerParCapacite(nombreVoyageurs);
        const reservationsQuiSeChevauchent = reservations.filter(reservation => (reservation.dateDebut <= dateFin) && (reservation.dateFin >= dateDebut));
        const numerosChambreARetirer = reservationsQuiSeChevauchent.map(reservation => reservation.numeroChambre);
        const chambresDisponibles = chambresParCapacite.filter(chambre => this.filtrerLesNumeroDeChambre(chambre.numeroChambre, numerosChambreARetirer));
        console.log(chambresDisponibles);
        return chambresDisponibles;
    }
    filtrerLesNumeroDeChambre(numeroChambre, numeroARetirer) {
        return !numeroARetirer.includes(numeroChambre);
    }
}
exports.ChercherChambreDisponible = ChercherChambreDisponible;
