import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();


app.use(cors());
//Access-Control-Allow-Origin: *
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

mongoose.connect('mongodb://localhost:27017/pictionary');

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router();

import User from './models/user';
import Request from './models/request';
import Waiting_word from './models/waiting_word';
import Room from './models/room';
import Result from './models/result';
import Word from './models/word';
import Room_word from './models/room_word'; 
import Participant from './models/participant';

router.route('/login').post(
    
    (req, res)=>{
        let kor_ime = req.body.kor_ime;
        console.log("------------------------back:"+kor_ime);

        User.find({'korisnicko_ime':kor_ime},
         (err,kor)=>{
            if(err) console.log(err);
            else res.json(kor);
        })
    }
);

router.route('/getUserByUsername').post(
    (req, res)=>{
        console.log("------------------------getUserByUsername");
        let kor_ime = req.body.kor_ime;

        User.find({'korisnicko_ime':kor_ime},
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/getMails').post(
    (req, res)=>{
        console.log("------------------------getMails");

        let mejl = req.body.mejl;

        User.find({'mejl':mejl},
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/findAllRequests').post(
    (req, res)=>{
        console.log("------------------------findAllRequests");

        Request.find(
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/findAllWordsRequests').post(
    (req, res)=>{
        console.log("------------------------findAllWordsRequests");

        Waiting_word.find(
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/findAllRooms').post(
    (req, res)=>{
        console.log("------------------------findAllRooms");

        Room.find(
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/sendRequest').post((req, res)=>{
    console.log("------------------------sendRequest");

    let request = new Request(req.body);
    request.save().
        then(user=>{
            res.status(200).json({'request':'ok'});
        }).catch(err=>{
            res.status(400).json({'request':'no'});
        })
});

router.route('/deleteRequest').post(
    (req, res)=>{

        Request.deleteOne({'korisnicko_ime':req.body.korisnicko_ime}).then(user=>{
            res.status(200).json({'request':'ok'});
        }).catch(err=>{
            res.status(400).json({'request':'no'});
        })
        console.log('deleted request');

    }
);

router.route('/findAllUsers').post(
    
    (req, res)=>{
        console.log("findAllUsers");
        User.find(
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);

router.route('/findAllWords').post(
    
    (req, res)=>{
        console.log("findAllWords");
        Word.find(
         (err,word)=>{
            if(err) console.log(err);
            else res.json(word);
        })
    }
);

router.route('/addUser').post((req, res)=>{
    let user = new User(req.body);
    user.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});

router.route('/addResult').post((req, res)=>{
    let r = new Result(req.body);
    r.save().
        then(r=>{
            res.status(200).json({'r':'ok'});
        }).catch(err=>{
            res.status(400).json({'r':'no'});
        })
});


router.route('/addRoom').post((req, res)=>{
    let room = new Room(req.body);
    room.save().
        then(room=>{
            res.status(200).json({'room':'ok'});
        }).catch(err=>{
            res.status(400).json({'room':'no'});
        })
});

router.route('/addParticipant').post((req, res)=>{
    let participant = new Participant(req.body);
    participant.save().
        then(participant=>{
            res.status(200).json({'participant':'ok'});
        }).catch(err=>{
            res.status(400).json({'participant':'no'});
        })
});

router.route('/deleteUser').post(
    (req, res)=>{

        User.deleteOne({'korisnicko_ime':req.body.korisnicko_ime}).then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
        console.log('deleted user');

    }
);

router.route('/deleteResult').post(
    (req, res)=>{

        Result.deleteOne({'id_igraca':req.body.id_igraca}).then(r=>{
            res.status(200).json({'r':'ok'});
        }).catch(err=>{
            res.status(400).json({'r':'no'});
        })
        console.log('deleted result');

    }
);

router.route('/findWordsForRoom').post(
    (req, res)=>{
        console.log("------------------------findWordsForRoom");
        let soba = req.body.soba;

        Room_word.find({'id_sobe':soba},
         (err,r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }
);

router.route('/findIdForRoom').post(
    (req, res)=>{
        console.log("------------------------findIdForRoom");
        let naziv = req.body.naziv;

        Room.find({'naziv':naziv},
         (err,r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }
);

router.route('/findAllParticipants').post(
    (req, res)=>{
        console.log("------------------------findAllParticipants "+req.body.id_sobe);
        let id_sobe = req.body.id_sobe;

        Participant.find({'id_sobe':id_sobe},
         (err,r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }
);

router.route('/runGame').post(
    (req, res)=>{
        console.log("------------------------runGame");
        let id = req.body.id;
        let aktivna_igra= '1';

        Room.collection.updateOne({'id':id}, {$set:{'aktivna_igra':aktivna_igra}});
    }
);

router.route('/updateRound').post(
    (req, res)=>{
        console.log("------------------------updateRound");
        let id = req.body.id;
        let num=0;

        Room.collection.updateOne({'id':id}, {$inc: { runda: +1}}).then(()=>{
            Room.find({'id':id},
            (err,r)=>{
                if(err) console.log(err);
                else {
                    res.json(r);
                }
            })
        });
    }
);

router.route('/setCurrentPainter').post(
    (req, res)=>{
        console.log("------------------------setCurrentPainter");
        let trenutno_crta = req.body.trenutno_crta;
        let trenutna_rec = req.body.trenutna_rec;
        let id= req.body.soba;

        Room.collection.updateOne({'id':id}, {$set:{'trenutno_crta':trenutno_crta, 'trenutna_rec':trenutna_rec}}).then(()=>{
            res.json(true);
        });
    }
);

router.route('/setCurrentWord').post(
    (req, res)=>{
        console.log("------------------------setCurrentWord");
        let trenutna_rec = req.body.trenutna_rec;
        let id= req.body.soba;

        Room.collection.updateOne({'id':id}, {$set:{'trenutna_rec':trenutna_rec}});
    }
);

router.route('/getCurrentWord').post(
    (req, res)=>{
        console.log("------------------------getCurrentWord");
        let id = req.body.soba;

        Room.find({'id':id},
         (err,r)=>{
            if(err) console.log(err);
            else res.json(r);
        })
    }
);



app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));