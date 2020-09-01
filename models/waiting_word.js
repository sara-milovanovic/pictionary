"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Waiting_word = new Schema({
    id: {
        type: String
    },
    rec: {
        type: String
    },
    korisnicko_ime: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Waiting_word', Waiting_word);
//# sourceMappingURL=waiting_word.js.map