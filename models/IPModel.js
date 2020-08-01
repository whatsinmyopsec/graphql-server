const mongoose = require("mongoose");

const IPModel = mongoose.model("ipinfos", {
  ip: String,
  hostname: String,
  city: String,
  region: String,
  country: String,
  loc: String,
  org: String,
  postal: String,
  timezone: String,
  country_name: String,
  latitude: String,
  longitude: String,
  createdAt: String,
});

module.exports = IPModel;