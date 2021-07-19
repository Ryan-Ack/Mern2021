const Joke = require('../models/joke.model');


module.exports = {

  // ====================== FIND ALL
  findAllJokes: (req, res) => {
    // pass parameters into find({PARAMETERS}) for specific *search
    Joke.find()
      .then(allTheJokes => res.json({ joke: allTheJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  //=================== FIND SINGLE
  // findOneSingleJoke: (req, res) => {
  //   // Find one joke by ID
  //   Joke.findOne({ _id: req.params.id })
  //     .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
  //     .catch(err => res.json({ message: "Something went wrong", error: err }));
  // },


  // ================== CREATE
  createNewJoke: (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  // ===================== UPDATE
  //https://mongoosejs.com/docs/deprecations.html  //deprecation warning resolved. 2 lines down useFindAndModify: false
  updateExistingJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
      .then(updatedJoke => res.json(updatedJoke))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  // ======================== DELETE
  deleteAnExistingJoke: (req, res) => {
    // Delete jokes by ID
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  }

  // ================== Validation for uniqueness

  // Joke.exists({ name: req.body.name })
  //   .then(jokeExists => {
  //     if (userExists) {
  //       // Promise.reject() will activate the .catch() below.
  //       return Promise.reject('Error Message Goes Here');
  //     }
  //     return User.create(req.body);
  //   })
  //   .then(saveResult => res.json(saveResult))
  //   .catch(err => res.json(err));


}



/*

const User = require("../models/user.model");

// ====================== FIND ALL
module.exports.findAllUsers = (req, res) => {
  // pass parameters into find({PARAMETERS}) for specific *search
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//=================== FIND SINGLE
module.exports.findOneSingleUser = (req, res) => {
  // Find one user by ID
  User.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// ================== CREATE

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// ===================== UPDATE
module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



// ======================== DELETE
module.exports.deleteAnExistingUser = (req, res) => {
  // Delete users by ID
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};




// ================== Validation for uniqueness

// User.exists({ name: req.body.name })
//   .then(userExists => {
//     if (userExists) {
//       // Promise.reject() will activate the .catch() below.
//       return Promise.reject('Error Message Goes Here');
//     }
//     return User.create(req.body);
//   })
//   .then(saveResult => res.json(saveResult))
//   .catch(err => res.json(err));

*/