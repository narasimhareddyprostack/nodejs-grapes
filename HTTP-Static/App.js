const http = require('http')
const fs = require('fs')
const path = require('path')
let server = http.createServer((req, resp) => {
    console.log("inside - cs")
    fs.readFile("views/index.html", 'utf-8', (err, data) => {
        if (err) throw err
        resp.end(data)
    })
})

server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running successfully port:${8000} `)
})