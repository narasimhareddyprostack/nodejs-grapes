const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("/about", (req, resp) => {
    //resp.send("Hello,GA")
    //resp.send("<h1>Hello,GA</h1>")
    resp.sendFile("/index.html")
})

app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running on port: 8080`)
})