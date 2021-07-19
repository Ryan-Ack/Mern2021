const { createNewJoke, findAllJokes, findOneSingleJoke, updateExistingJoke, deleteAnExistingJoke } = require("../controllers/joke.controller")

module.exports = app => {

  // Create
  app.post("/api/jokes/new", createNewJoke);

  // // Read(all and one)
  app.get("/api/jokes/", findAllJokes);
  // app.get("/api/jokes/random", findOneSingleJoke);

  // // Update
  app.put("/api/jokes/update/:id", updateExistingJoke);

  // // Delete
  app.delete("/api/jokes/delete/:id", deleteAnExistingJoke);
};

// server > routes > controller > model > config