import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Word = new Schema({
    id:{
        type:String
    },
    rec: {
        type: String
    }
});

export default mongoose.model('Word', Word);