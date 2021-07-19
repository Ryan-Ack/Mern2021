const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config")


app.use(express.json(), express.urlencoded({ extended: true }));


const AllJokesRoutes = require("./server/routes/joke.routes");
AllJokesRoutes(app);


app.listen(port, () => console.log(`>>>  server has started on port ${port}  <<< `))