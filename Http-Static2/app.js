/* import http from 'http'
import fs from 'fs'
import path from 'path' */
const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer((req, resp) => {
    //console.log(`${path.join(__dirname)}`)
    let url = req.url
    console.log(url)
    if (url === "/index") {
        fs.readFile(path.join(__dirname, "views", "index.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        })
    }
    if (url === "/about") {
        fs.readFile(path.join(__dirname, "views", "about.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        })
    }

    if (url === "/service") {
        fs.readFile(path.join(__dirname, "views", "services.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        })
    }
    if (url === "/contact") {
        fs.readFile(path.join(__dirname, "views", "contact.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        })
    }
})

server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server Running: ${8080}`)
})