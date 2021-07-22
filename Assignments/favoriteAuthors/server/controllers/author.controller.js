const Author = require("../models/author.model");

module.exports = {

    // Create
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) }) // has to be an object, or the syntax must be changed
    },


    // Read
    findAll: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },
    findById: (req, res) => {
        Author.findById(req.params.id) // object
            // Product.findOne({_id: req.params.id}) // arr
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => { res.status(400).json(err) })
    },


    // Update
    findOneAndUpdate: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },


    // Delete
    delete: (req, res) => {

        Author.deleteOne({ _id: req.params.id }) // hardcoded variable .params.{variable name here}
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    }

}
