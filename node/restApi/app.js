let express = require('express');
let app = express();
let port = 9870;

app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

app.get('/location',(req,res) => {
    res.send('From Location Route')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})