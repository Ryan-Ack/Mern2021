const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    //create
    app.post("/api/authors", AuthorController.create);
    //find all
    app.get("/api/authors", AuthorController.findAll);
    //find by ID
    app.get("/api/authors/:id", AuthorController.findById);
    // //update
    app.put("/api/authors/:id", AuthorController.findOneAndUpdate);
    // //delete
    app.delete("/api/authors/:id", AuthorController.delete)
}