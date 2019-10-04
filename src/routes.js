const fs = require('fs')
const url = require('url')

const nutrients = require('./utils/nutrients')

function renderHTML(path, res) {
    fs.readFile(path, (err, data) => {
        err ? console.log(err) : res.end(data)
    })
}

function checkRoute(req, res) {
    const urlObj = url.parse(req.url, true)
    const path = urlObj.pathname

    switch(path) {
        case "/":
           renderHTML('./public/index.html', res)
        break
        case "/json":
            const query = urlObj.query.food
            if (!query) { return console.log('no fooditem was mentioned') }

            nutrients(query, (err, data) => {
                if (err) { return console.log(err) }

                res.writeHead(200, {'Content-Type': 'application/json' })
                res.end(JSON.stringify(data))
            })
        break
        default:
           res.writeHead(404);
           res.end('this page does not exist') 
    }
}

module.exports = checkRoute