/**
 * Express middleware configuration.
 * @module middlewares
 */
const app = require("express")();
const corsMiddleware = require("./corsMiddleware");
const jsonMiddleware = require("./jsonMiddleware");
const morganMiddleware = require("./morganMiddleware");
const sessionMiddleware = require("./sessionMiddleware");
const flashMiddleware = require("./flashMiddleware");
const passport = require("./authenticationMiddleware");

app.use(corsMiddleware);
app.use(jsonMiddleware);
app.use(morganMiddleware);
app.use(sessionMiddleware);
app.use(flashMiddleware);
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;

