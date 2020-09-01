import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Request = new Schema({
    id:{
        type:String
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
    slika:{
        type: String
    },
    mejl:{
        type:String
    }
});

export default mongoose.model('Request', Request);