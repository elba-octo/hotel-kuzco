import {ListerChambre} from "./use_cases/ListerChambre";
import {JsonChambreRepository} from "./infrastructure/JsonChambreRepository";

console.log(new ListerChambre(new JsonChambreRepository()).execute());