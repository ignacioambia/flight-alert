const cron = require("node-cron");
const RouteTracker = require("../schemas/RouteTracker");

cron.schedule("28 * * * *", async () => {
  await new RouteTracker({}).save();
});

function tracker() {}

module.exports = tracker;
