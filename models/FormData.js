const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const FormDataModel = mongoose.model("Auth", FormDataSchema);

module.exports = FormDataModel;
