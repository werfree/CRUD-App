const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/Edureka",
  { useUnifiedTopology: true },
  err => {
    if (err) console.log("Error in Mongoose");
    else console.log("Connected To Database");
  }
);

const course = require("./course.model");
