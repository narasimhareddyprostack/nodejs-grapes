const express = require('express')
const morgan = require('morgan')
const app = express()


//enable morgan middleware - http logger 
app.use(morgan('dev'))
app.get("/", (req, resp) => {
    resp.send('Root Page / Index Page')
})

app.get("/user/", (req, resp) => {
    resp.send('User  Page / Index Page')
})

app.get("/user/all", (req, resp) => {
    resp.send('User Page / All - Users')
})

app.post("/user/add", (req, resp) => {
    resp.send('User Page - Add User')
})

app.delete('/user/del', (req, resp) => {

    resp.send("User Page - delete user")
})

app.get("/product/all", (req, resp) => {
    resp.send("Product Page -all Product")
})

app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running on port ${8080}`)
})