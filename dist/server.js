"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(cors_1.default());
//Access-Control-Allow-Origin: *
app.use(body_parser_1.default.urlencoded({ limit: '50mb' }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});
app.get('/', function (req, res, next) {
    // Handle the get for this route
});
app.post('/', function (req, res, next) {
    // Handle the post for this route
});
mongoose_1.default.connect('mongodb://localhost:27017/pictionary');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
const user_1 = __importDefault(require("./models/user"));
const request_1 = __importDefault(require("./models/request"));
const waiting_word_1 = __importDefault(require("./models/waiting_word"));
const room_1 = __importDefault(require("./models/room"));
const result_1 = __importDefault(require("./models/result"));
const word_1 = __importDefault(require("./models/word"));
const room_word_1 = __importDefault(require("./models/room_word"));
const participant_1 = __importDefault(require("./models/participant"));
router.route('/login').post((req, res) => {
    let kor_ime = req.body.kor_ime;
    console.log("------------------------back:" + kor_ime);
    user_1.default.find({ 'korisnicko_ime': kor_ime }, (err, kor) => {
        if (err)
            console.log(err);
        else
            res.json(kor);
    });
});
router.route('/getUserByUsername').post((req, res) => {
    console.log("------------------------getUserByUsername");
    let kor_ime = req.body.kor_ime;
    user_1.default.find({ 'korisnicko_ime': kor_ime }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/getMails').post((req, res) => {
    console.log("------------------------getMails");
    let mejl = req.body.mejl;
    user_1.default.find({ 'mejl': mejl }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/findAllRequests').post((req, res) => {
    console.log("------------------------findAllRequests");
    request_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/findAllWordsRequests').post((req, res) => {
    console.log("------------------------findAllWordsRequests");
    waiting_word_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/findAllRooms').post((req, res) => {
    console.log("------------------------findAllRooms");
    room_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/sendRequest').post((req, res) => {
    console.log("------------------------sendRequest");
    let request = new request_1.default(req.body);
    request.save().
        then(user => {
        res.status(200).json({ 'request': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'request': 'no' });
    });
});
router.route('/deleteRequest').post((req, res) => {
    request_1.default.deleteOne({ 'korisnicko_ime': req.body.korisnicko_ime }).then(user => {
        res.status(200).json({ 'request': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'request': 'no' });
    });
    console.log('deleted request');
});
router.route('/findAllUsers').post((req, res) => {
    console.log("findAllUsers");
    user_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/findAllWords').post((req, res) => {
    console.log("findAllWords");
    word_1.default.find((err, word) => {
        if (err)
            console.log(err);
        else
            res.json(word);
    });
});
router.route('/addUser').post((req, res) => {
    let user = new user_1.default(req.body);
    user.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/addResult').post((req, res) => {
    let r = new result_1.default(req.body);
    r.save().
        then(r => {
        res.status(200).json({ 'r': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'r': 'no' });
    });
});
router.route('/addRoom').post((req, res) => {
    let room = new room_1.default(req.body);
    room.save().
        then(room => {
        res.status(200).json({ 'room': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'room': 'no' });
    });
});
router.route('/addParticipant').post((req, res) => {
    let participant = new participant_1.default(req.body);
    participant.save().
        then(participant => {
        res.status(200).json({ 'participant': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'participant': 'no' });
    });
});
router.route('/deleteUser').post((req, res) => {
    user_1.default.deleteOne({ 'korisnicko_ime': req.body.korisnicko_ime }).then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
    console.log('deleted user');
});
router.route('/deleteResult').post((req, res) => {
    result_1.default.deleteOne({ 'id_igraca': req.body.id_igraca }).then(r => {
        res.status(200).json({ 'r': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'r': 'no' });
    });
    console.log('deleted result');
});
router.route('/findWordsForRoom').post((req, res) => {
    console.log("------------------------findWordsForRoom");
    let soba = req.body.soba;
    room_word_1.default.find({ 'id_sobe': soba }, (err, r) => {
        if (err)
            console.log(err);
        else
            res.json(r);
    });
});
router.route('/findIdForRoom').post((req, res) => {
    console.log("------------------------findIdForRoom");
    let naziv = req.body.naziv;
    room_1.default.find({ 'naziv': naziv }, (err, r) => {
        if (err)
            console.log(err);
        else
            res.json(r);
    });
});
router.route('/findAllParticipants').post((req, res) => {
    console.log("------------------------findAllParticipants " + req.body.id_sobe);
    let id_sobe = req.body.id_sobe;
    participant_1.default.find({ 'id_sobe': id_sobe }, (err, r) => {
        if (err)
            console.log(err);
        else
            res.json(r);
    });
});
router.route('/runGame').post((req, res) => {
    console.log("------------------------runGame");
    let id = req.body.id;
    let aktivna_igra = '1';
    room_1.default.collection.updateOne({ 'id': id }, { $set: { 'aktivna_igra': aktivna_igra } });
});
router.route('/updateRound').post((req, res) => {
    console.log("------------------------updateRound");
    let id = req.body.id;
    let num = 0;
    room_1.default.collection.updateOne({ 'id': id }, { $inc: { runda: +1 } }).then(() => {
        room_1.default.find({ 'id': id }, (err, r) => {
            if (err)
                console.log(err);
            else {
                res.json(r);
            }
        });
    });
});
router.route('/setCurrentPainter').post((req, res) => {
    console.log("------------------------setCurrentPainter");
    let trenutno_crta = req.body.trenutno_crta;
    let trenutna_rec = req.body.trenutna_rec;
    let id = req.body.soba;
    room_1.default.collection.updateOne({ 'id': id }, { $set: { 'trenutno_crta': trenutno_crta, 'trenutna_rec': trenutna_rec } }).then(() => {
        res.json(true);
    });
});
router.route('/setCurrentWord').post((req, res) => {
    console.log("------------------------setCurrentWord");
    let trenutna_rec = req.body.trenutna_rec;
    let id = req.body.soba;
    room_1.default.collection.updateOne({ 'id': id }, { $set: { 'trenutna_rec': trenutna_rec } });
});
router.route('/getCurrentWord').post((req, res) => {
    console.log("------------------------getCurrentWord");
    let id = req.body.soba;
    room_1.default.find({ 'id': id }, (err, r) => {
        if (err)
            console.log(err);
        else
            res.json(r);
    });
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map