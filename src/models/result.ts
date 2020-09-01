import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Result = new Schema({
    id:{
        type:String
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

export default mongoose.model('Result', Result);