const connetion = require("./model");

const express = require("express");
const app = express();
const expressHandlerbars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const course = require("./router/course");
const router = require("./router/baseRoute");

const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("views", path.join(__dirname, "views/"));
app.engine(
  "hbs",
  expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layout/"
  })
);

app.set("view engine", "hbs");

app.use("/", router);
app.use("/courses", course);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
