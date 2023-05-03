const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })
let port = process.env.PORT
let host = process.env.HOST

console.log(port)

let server = http.createServer((req, resp) => {
    resp.end("Server running ! First Req Page")
})

server.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running on Port No...: ${port}`)
})