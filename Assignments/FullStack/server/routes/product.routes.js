const ProductController = require("../controllers/product.controller");

module.exports = app => {
    //homepage
    app.get("/api", ProductController.index);
    //create
    app.post("/api/products/new", ProductController.createProduct);
    //find all
    app.get("/api/products/all", ProductController.allProducts);
    //find by ID
    app.get("/api/products/:id", ProductController.findOneProduct);

    // //update
    // app.put("/api/products/update/:id", ProductController.findAndUpdate);
    // //delete
    // app.delete("/api/products/delete/:id", ProductController.findAndDelete)
}