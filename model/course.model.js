const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: "Required"
  },
  courseId: {
    type: String
  },
  courseFee: {
    type: String
  }
});

mongoose.model("Course", courseSchema);
