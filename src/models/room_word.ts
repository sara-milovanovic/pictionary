import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Room_word = new Schema({
    id_sobe:{
        type:String
    },
    id_reci: {
        type: String
    }
});

export default mongoose.model('Room_word', Room_word);