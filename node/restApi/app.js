let express = require('express');
let app = express();
let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoLiveUrl;
let db;

app.use(morgan('common'))

app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurants',(req,res) => {
    //let id = req.query.stateId;
    let {stateId} = req.query
    db.collection('restaurants').find({state_id:Number(stateId)}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/mealType',(req,res) => {
    db.collection('mealType').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// app.get('/restaurants/:id',(req,res) => {
//     //let id = req.params.id;
//     let {id} = req.params
//     db.collection('restaurants').find({state_id:Number(id)}).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })

// connection with db
MongoClient.connect(mongoUrl,(err,client) =>{
    if(err) console.log(`Error While Connecting`);
    db = client.db('augintern');
    app.listen(port,() => {
        console.log(`listening on port ${port}`)
    })
})

