/**
 * Express server configuration and startup.
 * @module app
 */

const express = require("express");
const app = express();
const path = require("path");
const routes = require("./controllers");
const middleware = require("./middlewares");
const connectToDatabase = require("./config/database");
const PORT = process.env.PORT || 8080;

app.use(middleware);
app.use("/api", routes); // this mounts controllers/index.js at the route /api
connectToDatabase();

// for production use, we serve the static react build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  // all unknown routes should be handed to our react app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}; 
 
/**
 * Starts the server and listens on the specified port.
 * @async
 * @function startServer
 * @returns {Promise<void>} A promise that resolves when the server starts successfully.
 */
const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to start the server", error);
  }
};
startServer();