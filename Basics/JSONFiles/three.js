const fs = require('fs')
let emp = {
    id: 101,
    name: "Rahul",
    sal: 34000
}

fs.writeFile("emp.json", JSON.stringify(emp), (err) => {
    if (err) throw err
    console.log("Written Successfully")
})
