const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
//const chalk = require('chalk')

//create expess app 
const app = express()

app.use(morgan(''))


app.use(express.static(path.join(__dirname, "public")))
//read env variables 
dotenv.config({ path: "./config/config.env" })
let port = process.env.PORT
let host = process.env.host

//app.use(express.static('public'))

//implement request
app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "index.html"))

})

app.get("/about", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "about.html"))
})

app.get("/service", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "services.html"))
})

app.listen(port, host, (err) => {
    if (err) throw err

    console.log(`Server is Running.....: ${host}:${port}`)
})