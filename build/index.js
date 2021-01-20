"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListerChambre_1 = require("./use_cases/ListerChambre");
const JsonChambreRepository_1 = require("./infrastructure/JsonChambreRepository");
console.log(new ListerChambre_1.ListerChambre(new JsonChambreRepository_1.JsonChambreRepository()).execute());
