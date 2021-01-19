export class Chambre {
    id: number
    etage: number
    numeroChambre: number
    description: string
    capacite: number

    constructor(id: number, etage: number, numeroChambre: number, description: string, capacite: number) {
        this.id = id;
        this.etage = etage;
        this.numeroChambre = numeroChambre;
        this.description = description;
        this.capacite = capacite;
    }
}