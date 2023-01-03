const cron = require("node-cron");
const RouteTracker = require("../schemas/RouteTracker");

cron.schedule("* */1 * * *", async () => {
  await new RouteTracker({}).save();
});

function tracker() {}

module.exports = tracker;
