import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Room = new Schema({
    id:{
        type: String
    },
    naziv: {
        type: String
    },
    lozinka:{
        type: String
    },
    vlasnik:{
        type: String
    },
    trenutna_rec:{
        type: String
    },
    aktivna_igra:{
        type: String
    },
    trenutno_crta:{
        type: String
    },
    runda:{
        type: Number
    }
});

export default mongoose.model('Room', Room);