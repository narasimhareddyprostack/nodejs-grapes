const fs = require('fs')

//fs.readFile('data.txt', 'utf-8', () => { })
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})