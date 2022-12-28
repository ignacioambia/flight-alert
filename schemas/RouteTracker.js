const mongoose = require("mongoose");

const routeTrackerSchema = mongoose.Schema({
  from: String,
  to: String,
  history: [Object],
  created: { type: Date, default: Date.now },
});

const RouteTracker = mongoose.model("RouteTracker", routeTrackerSchema);

module.exports = RouteTracker;
