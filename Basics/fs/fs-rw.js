const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err

    fs.writeFile('city.txt', data, (err) => {
        if (err) throw err
        console.log("Written Successfully")
    })
})