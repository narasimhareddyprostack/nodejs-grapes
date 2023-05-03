const bcrypt = require('bcrypt')
let user_Payload = {
    uid: 101,
    name: "Rahul Gandhi",
    password: "RG123",
    cc: '4444 5555 6666 7777'
}
console.log(user_Payload)
let salt = bcrypt.genSaltSync(10)
let newPassword = bcrypt.hashSync(user_Payload.password, salt)
//console.log(user_Payload.password)
//console.log(newPassword)

user_Payload = { ...user_Payload, password: newPassword }

console.log(user_Payload)

let flag = bcrypt.compareSync("pm123", user_Payload.password)
flag ? console.log("Login Success") : console.log("Log in Failed")