"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Room = new Schema({
    id: {
        type: String
    },
    naziv: {
        type: String
    },
    lozinka: {
        type: String
    },
    vlasnik: {
        type: String
    },
    trenutna_rec: {
        type: String
    },
    aktivna_igra: {
        type: String
    },
    trenutno_crta: {
        type: String
    },
    runda: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Room', Room);
//# sourceMappingURL=room.js.map