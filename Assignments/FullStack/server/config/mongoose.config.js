const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to DB established"))
    .catch((err) => console.log("There was an error connecting to the DB", err))

