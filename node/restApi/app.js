let express = require('express');
let app = express();
let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let cors = require('cors')
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser')
let mongoUrl = process.env.MongoLocalUrl;
let db;

app.use(morgan('common'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

function auth(key){
    if(process.env.KEY == key){
        return true
    }else{
        return false
    }  
}

app.get('/location',(req,res) => {
    let key = req.header('x-basic-token')
    if(auth(key)) {
        db.collection('location').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    } else {
        res.send('Unauthorized Request')
    }
})

// app.get('/location',(req,res) => {
//     let key = req.header('x-basic-token')
//     if(process.env.KEY == key){
//         db.collection('location').find().toArray((err,result) => {
//             if(err) throw err;
//             res.send(result)
//         })
//     }else{
//         res.send('Unauthorized Request')
//     }
// })

app.get('/restaurants',(req,res) => {
    let query = {}
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId);
    if(stateId){
       query = {state_id:stateId}
    }else if(mealId){
         query = {"mealTypes.mealtype_id":mealId}
    } else {
        query = {}
    }
    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get(`/filter/:mealId`,(req,res) => {
    let query = {}
    let sort = {cost:1}
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(cuisineId && lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {
            "mealTypes.mealtype_id":mealId,
        }
    }
    db.collection('restaurants').find(query).sort(sort).toArray((err,result) => {
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

app.get('/details/:id',(req,res) => {
    let id = Number(req.params.id)
    db.collection('restaurants').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/menu/:id',(req,res) => {
    let id = Number(req.params.id)
    db.collection('menu').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
})

app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body, (err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

app.get('/orders',(req,res) => {
    let email = req.query.email;
    let query = {}
    if(email){
        query={email}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date,
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
    })
})

// app.get('/details/:id',(req,res) => {
//     let id = mongo.ObjectId(req.params.id)
//     db.collection('restaurants').find({_id:id}).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })

// })

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
    db = client.db('internfeb');
    app.listen(port,() => {
        console.log(`listening on port ${port}`)
    })
})

