const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(express.json()); // Middleware para analisar application/json
app.use(express.urlencoded({ extended: true })); // Middleware para analisar application/x-www-form-urlencoded
app.use(cors());
app.use(router);

module.exports = app;
