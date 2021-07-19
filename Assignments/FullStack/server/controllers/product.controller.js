const Product = require("../models/product.model");

module.exports = {
    index: (req, res) => {
        res.json({ message: "Hello from Product.controller.js" })
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({ message: "something went wrong when creating a product", error: err }))
    },
    allProducts: (req, res) => {
        Product.find()
            .then(allTheProducts => res.json(allTheProducts))
            .catch(err => res.json({ message: "something went wrong when finding your products", error: err }))
    },
    findOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(oneProduct => {
                console.log(oneProduct)
                res.json(oneProduct)
            })
            .catch(err => res.json({ message: "Something wetng wrong when finding the id of your user", error: err }))
    }
}