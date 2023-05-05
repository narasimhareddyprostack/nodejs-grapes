const express = require('express')
const morgan = require('morgan')
const app = express()
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

//enable morgan middleware - http logger 
app.use(morgan('dev'))

app.get("/", (req, resp) => {
    resp.send('Root Page / Index Page')
})

app.use("/user", userRouter)
app.use("/product", productRouter)


app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running on port ${8080}`)
})