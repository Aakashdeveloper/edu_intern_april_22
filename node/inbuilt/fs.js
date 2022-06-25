let fs = require('fs');

// fs.writeFile('myCode.txt','Hii From MAC',()=>{
//     console.log('Task Done')
// })

// fs.appendFile('myText.txt',`${Math.floor(Math.random()*10000)} Hii From Node \n`,() => {
//     console.log('Task Done')
// })

// fs.readFile('data.json','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('myCode.txt','nodeFile.txt',(err)=>{
//     if(err) throw err;
//     console.log('file renamed')
// })

fs.unlink('myText.txt',(err)=>{
    if(err) throw err;
    console.log('file Deleted')
})