const http = require('http')
let server = http.createServer((req, resp) => {
    resp.end("Hello,GA")
})
server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server Running on: ${8080}`);
})

