const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;


require("./server/config/mongoose.config");
app.use(cors());


app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/routes/product.routes')(app)

const server = app.listen(port, () => console.log(`Server is running on port ${server.address().port}!`))
