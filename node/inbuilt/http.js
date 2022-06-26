let http = require('http');

// req > what we send to server (params, queryParams,body)
// res > what server will send back

let server = http.createServer((req, res) => {
    res.write(`<h1>Hiii from Node JS server </h1>`);
    res.end()
})

server.listen(5690)