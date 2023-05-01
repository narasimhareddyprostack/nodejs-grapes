const fs = require('fs')

fs.readFile("E:/Trainig Batch3/NodeJS-April/Basics/path/lunch/biryani/emp.json", 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})