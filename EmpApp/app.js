//create express app
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get("/tst", (req, resp) => {
    resp.send("Test Case");
})
let url = 'mongodb://localhost:27017/dbtwo'
mongoose.connect(url, {})
    .then((resp) => { console.log("DB connection Successfull") })
    .catch((err) => {
        throw err
    })
app.listen(8080, (err) => {
    if (err) throw err
    console.log("Server is Running on PORT:8080")
})
