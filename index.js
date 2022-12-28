const { mongoose } = require("mongoose");
const cron = require("node-cron");
const express = require("express");
require("dotenv").config();

const app = express();

//routes
const routeTracker = require("./routes/routeTracker.route");

app.use(express.json());
app.use("/route-tracker", routeTracker);

const { DB_USER, DB_PWD, PORT } = process.env;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.uceoffi.mongodb.net/dev?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((e) => {
    console.log("Error: ", e);
  });

cron.schedule("5 * * * * *", () => {
  console.log("Hola mundo");
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log("project running");
});
