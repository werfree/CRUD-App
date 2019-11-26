const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { homePage } = require("../controllers/homePage");

const courseModel = mongoose.model("Course");
router.get("/", (req, res) => {
  res.render("index", {});
});

router.get("/list", (req, res) => {
  courseModel.find((err, docs) => {
    if (!err) {
      res.send("List");
      console.log(docs);
    } else {
      res.send("Error");
    }
  });
});

module.exports = router;
