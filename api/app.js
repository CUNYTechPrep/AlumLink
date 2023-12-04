const express = require("express");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");
const path = require("path");
const db = require("./models");
const routes = require("./controllers");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", require("./controllers"));
// this mounts controllers/index.js at the route `/api`
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

const sequelize = new Sequelize('alumlinkdb', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// for production use, we serve the static react build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  // all unknown routes should be handed to our react app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}; 
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
//db.sequelize.sync({ force: false });
 
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
startServer();





