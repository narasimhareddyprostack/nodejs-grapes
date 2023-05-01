const fs = require('fs')

fs.readFile("xyz.json", 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})