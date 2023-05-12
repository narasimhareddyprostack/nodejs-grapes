const express = require('express')
const router = express.Router()
const Product = require('../model/Product')
/*   API's  */
router.get("/all", async (req, resp) => {
    let products = await Product.find()
    resp.status(200).json({ products: products })
})
router.post("/add", (req, resp) => {
    //read data from form/ post man
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        qty: req.body.qty
    })
    console.log(JSON.stringify(product))
    product.save();
    resp.status(200).json({ status: "inserted Successfully" })
})

module.exports = router