import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    id:{
        type:String
    },
    je_najbolji: {
        type: Boolean
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    korisnicko_ime: {
        type: String
    },
    lozinka: {
        type: String
    },
    tip: {
        type: String
    },
    slika:{
        type: String
    },
    mejl:{
        type:String
    }
});

export default mongoose.model('User', User);