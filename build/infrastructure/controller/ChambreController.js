"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChambreController {
    constructor(listerChambre) {
        this.listerChambre = listerChambre;
    }
    lister() {
        return this.listerChambre.execute();
    }
}
exports.default = ChambreController;
