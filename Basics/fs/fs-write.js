const fs = require('fs')


fs.writeFile("abc.txt", "Hello,Gm", (err) => {
    if (err) throw err
    console.log("Written successfully")
})