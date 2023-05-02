const http = require('http')
const fs = require('fs')
const path = require('path')
let server = http.createServer((req, resp) => {
    let url = req.url
    if (url == "/about") {
        resp.end("About Page")
    }
    else {
        resp.end("All Page")
    }
})

server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running successfully port:${8000} `)
})