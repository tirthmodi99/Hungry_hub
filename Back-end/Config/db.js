const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(URL);

module.exports = {
  connection,
};