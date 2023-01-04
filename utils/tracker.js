const cron = require("node-cron");
const RouteTracker = require("../schemas/RouteTracker");

cron.schedule("17 * * * *", async () => {
  await new RouteTracker({}).save();
});

function tracker() {}

module.exports = tracker;
