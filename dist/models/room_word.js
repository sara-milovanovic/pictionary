"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Room_word = new Schema({
    id_sobe: {
        type: String
    },
    id_reci: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Room_word', Room_word);
//# sourceMappingURL=room_word.js.map