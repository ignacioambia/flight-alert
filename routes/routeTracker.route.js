const express = require("express");
const RouteTracker = require("../schemas/RouteTracker");

const route = express.Router();

route.get("/", async (req, res) => {
  const allRoutes = await RouteTracker.find();
  res.send(allRoutes);
});

route.post("/", async (req, res) => {
  const routeTracker = await new RouteTracker(req.body).save();
  res.send(routeTracker);
});

route.delete("/", async (req, res) => {
  await RouteTracker.deleteMany({});
  res.send("Route tracking list is cleared now");
});

module.exports = route;
