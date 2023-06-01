const express = require("express");
require("dotenv").config();
require("./config/db");
const ejs = require("ejs");

const { errors } = require("celebrate");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded());
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", require("./router"));

app.use(errors());

app.listen(PORT, () => {
  console.log(`Server is runnig on the port: ${PORT}`);
});
