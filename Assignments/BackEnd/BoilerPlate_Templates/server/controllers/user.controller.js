const User = require('../models/user.model');

module.exports = {

  // ====================== FIND ALL
  findAllUsers: (req, res) => {
    // pass parameters into find({PARAMETERS}) for specific *search
    User.find()
      .then(allDaUsers => res.json({ users: allDaUsers }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  //=================== FIND SINGLE
  findOneSingleUser: (req, res) => {
    // Find one user by ID
    User.findOne({ _id: req.params.id })
      .then(oneSingleUser => res.json({ user: oneSingleUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },


  // ================== CREATE
  createNewUser: (req, res) => {
    User.create(req.body)
      .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  // ===================== UPDATE
  updateExistingUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
      .then(updatedUser => res.json({ user: updatedUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  // ======================== DELETE
  deleteAnExistingUser: (req, res) => {
    // Delete users by ID
    User.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  }

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


}