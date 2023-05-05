const express = require('express')
let router = express.Router()

//impliments routes
router.get("/all", (req, resp) => {
    
    resp.send("Product Page -all Product")
})
router.post("/add", (req, resp) => {
    console.log("indise product router - add")
    resp.send("Product Route- add product")
})


module.exports = router