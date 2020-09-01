import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Participant = new Schema({
    id_sobe:{
        type: String
    },
    id_igraca: {
        type: String
    }
});

export default mongoose.model('Participant', Participant);