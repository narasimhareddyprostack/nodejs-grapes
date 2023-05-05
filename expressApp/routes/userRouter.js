const express = require('express')
let router = express.Router()

router.get("/", (req, resp) => {
    resp.send('User  Page / Index Page')
})

router.get("/all", (req, resp) => {
    console.log("Test Case 123")
    resp.send('User Page / All - Users')
})

router.post("/add", (req, resp) => {
    resp.send('User Page - Add User')
})

router.delete('/del', (req, resp) => {
    console.log("delete Req")
    resp.send("User Page - delete user")
})



module.exports = router