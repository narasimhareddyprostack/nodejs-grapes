const fs = require('fs')

fs.readFile('emp.json', 'utf-8', (err, data) => {
    if (err) throw err
    data = JSON.parse(data)
    console.log(data.name)
})