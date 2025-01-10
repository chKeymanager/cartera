require("dotenv").config();
const express = require("express");
const routes = require("./routers/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", routes);
app.use("/api", require("./routers/api"));

module.exports = app;
