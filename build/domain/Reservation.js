"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(numeroChambre, dateDebut, dateFin, nombreVoyageurs) {
        this.numeroChambre = numeroChambre;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nombreVoyageurs = nombreVoyageurs;
    }
}
exports.Reservation = Reservation;
