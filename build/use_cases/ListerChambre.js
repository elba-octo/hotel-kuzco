"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListerChambre = void 0;
class ListerChambre {
    constructor(chambreRepository) {
        this.chambreRepository = chambreRepository;
    }
    execute() {
        return this.chambreRepository.lister();
    }
}
exports.ListerChambre = ListerChambre;
