export class Chambre {
    etage: number
    numeroChambre: number
    description: string
    capacite: number

    constructor(etage: number, numeroChambre: number, description: string, capacite: number) {
        this.etage = etage;
        this.numeroChambre = numeroChambre;
        this.description = description;
        this.capacite = capacite;
    }
}