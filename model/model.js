const mongoose = require("mongoose");

const Auth = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: String },
  age: { type: String },
});

module.exports = mongoose.model("Auths", Auth);
