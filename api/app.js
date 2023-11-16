
const express = require("express");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");
const path = require("path");
const db = require("./models");
const routes = require("./");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;



// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

const sequelize = new Sequelize('alumlinkdb', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    
    // start up the server
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Call the asynchronous function
startServer();





