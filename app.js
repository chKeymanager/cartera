require("dotenv").config();
const express = require("express");
const routes = require("./routers/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", routes);
app.listen(PORT, () =>
console.log(`Aplicación corriendo en el puerto ${PORT}`)
);
