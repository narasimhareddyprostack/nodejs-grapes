const mongoose = require('mongoose')
let productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    qty: { type: Number, require: true }
})

let product = mongoose.model("product", productSchema)

module.exports = product