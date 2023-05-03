const jwt = require('jsonwebtoken')

let user_Payload = {
    name: "Rahul Gandhi",
    email: "Rahul@gmail.com"
}
let token = jwt.sign(user_Payload, "TryNextTime")
console.log(token)