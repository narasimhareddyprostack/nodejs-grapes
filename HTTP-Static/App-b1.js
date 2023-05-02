const http = require('http')

let server = http.createServer((req, resp) => {
    let url = req.url
    console.log(url)
    resp.end("<h1>Hello,GA</h1>")
})

server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running successfully port:${8000} `)
})