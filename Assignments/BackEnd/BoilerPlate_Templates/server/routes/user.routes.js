const UserController = require("../controllers/user.controller");


module.exports = app => {

  // Create
  app.post("/api/users/new", UserController.createNewUser);

  // Read(all and one)
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);

  // Update
  app.put("/api/users/update/:id", UserController.updateExistingUser);

  // Delete
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};



// can also destructure instead.. //does not require "UserController." to be appended
/*
const { createNewUser, findAllUsers, findOneSingleUser, updateExistingUser, deleteAnExistingUser } = require("../controllers/user.controller")

module.exports = app => {

  // Create
  app.post("/api/users/new", createNewUser);

  // Read(all and one)
  app.get("/api/users/", findAllUsers);
  app.get("/api/users/:id", findOneSingleUser);

  // Update
  app.put("/api/users/update/:id", updateExistingUser);

  // Delete
  app.delete("/api/users/delete/:id", deleteAnExistingUser);
};

server > routes > controller > model > config
*/