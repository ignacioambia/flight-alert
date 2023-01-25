const { mongoose } = require("mongoose");
const express = require("express");
const tracker = require("./utils/tracker");

require("dotenv").config();

const app = express();

//routes
const routeTracker = require("./routes/routeTracker.route");

// app.use(express.json());
// app.use("/route-tracker", routeTracker);

const { DB_USER, DB_PWD, PORT } = process.env;

// mongoose
//   .connect(
//     `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.uceoffi.mongodb.net/dev?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     tracker();
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//   });


app.get('/', (req, res)=>{
  res.send('Flight alert running');
})

const port = PORT || 3000;
app.listen(port, () => {
  console.log("project running on port", port, DB_USER);
});
