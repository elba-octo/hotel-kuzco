export class Reservation {
    numeroChambre: number
    dateDebut: Date
    dateFin: Date
    nombreVoyageurs: number

    constructor(numeroChambre: number, dateDebut: Date, dateFin: Date, nombreVoyageurs: number) {
        this.numeroChambre = numeroChambre;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nombreVoyageurs = nombreVoyageurs;
    }

}
