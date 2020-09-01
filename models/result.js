"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Result = new Schema({
    id: {
        type: String
    },
    id_igraca: {
        type: Boolean
    },
    najbolji_rezultat: {
        type: String
    },
    broj_odigranih_partija: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Result', Result);
//# sourceMappingURL=result.js.map