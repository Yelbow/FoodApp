const http = require('http')
const url = require('url')
const fs = require('fs')

const routes = require('./routes')
const nutrients = require('./utils/nutrients')


// const server = http.createServer('',).listen(3000)

http.createServer( (req, res) => {

    routes(req, res)

    // const urlObj = url.parse(req.url, true)
    // if (urlObj.pathname === '/json' && req.method === 'GET'){
    //     const query = urlObj.query.food
    //     if (!query) { return console.log('no fooditem was mentioned') }
        
    //     nutrients(query, (err, data) => {
    //         if (err) { return console.log(err) }

    //         res.writeHead(200, {'Content-Type': 'application/json' })
    //         res.end(JSON.stringify(data))
    //     }) 

    // } else if (urlObj.pathname = '/'){
    //     fs.readFile('./public/index.html','utf8' , function (err, data) {
    //         if (err) { return console.log(err) }
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.write(data)
    //         res.end('on home')    
    //     })
    // } else {
    //     res.end('go to /json?food=')
    // }

}).listen(3000) 