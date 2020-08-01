const mongoose = require("mongoose");

const DownloadsModel = mongoose.model("downloads", {
  destfile: String,
  duplicate: Boolean,
  eventid: String,
  message: String,
  outfile: String,
  sensor: String,
  session: String,
  shasum: String,
  src_ip: String,
  timestamp: String,
  url: String,
});

module.exports = DownloadsModel;
