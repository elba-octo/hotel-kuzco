"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonChambreRepository = void 0;
const Chambre_1 = require("../domain/Chambre");
const chambres_json_1 = __importDefault(require("../ressources/chambres.json"));
class JsonChambreRepository {
    lister() {
        return chambres_json_1.default.map(chambre => { return new Chambre_1.Chambre(chambre.id, chambre.etage, chambre.chambre, chambre.description, chambre.capacite); });
    }
    listerParCapacite(nombreVoyageurs) {
        return this.lister().filter(chambre => chambre.capacite >= nombreVoyageurs);
    }
}
exports.JsonChambreRepository = JsonChambreRepository;
