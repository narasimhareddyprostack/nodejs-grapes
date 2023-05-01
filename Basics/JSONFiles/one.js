const fs = require('fs')

fs.readFile("abc.json", 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)

    fs.writeFile('xyz.json', data, (err) => {
        if (err) throw err
        console.log("Writren Succesfully")
    })
})