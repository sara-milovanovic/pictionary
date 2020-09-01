import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Waiting_word = new Schema({
    id:{
        type:String
    },
    rec: {
        type: String
    },
    korisnicko_ime: {
        type: String
    }
});

export default mongoose.model('Waiting_word', Waiting_word);