//read file - data.txt
import fs from 'fs'

let data = fs.readFileSync('data.txt', 'utf-8')
console.log(data)