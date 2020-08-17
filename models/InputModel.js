const mongoose = require("mongoose");

const InputModel = mongoose.model("input", {
  sensor: String,
  eventid: String,
  src_ip: String,
  input: String,
  session: String,
  timestamp: String,
  message: String,
});

module.exports = InputModel;
