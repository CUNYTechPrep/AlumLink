/**
 * Express session middleware.
 * @module sessionMiddleware
 */

const session = require("express-session");
require("dotenv").config();

/**
 * Creates and configures the session middleware.
 * @function sessionMiddleware
 * @returns {Object} The session middleware.
 */
const sessionMiddleware = session({
  secret: "super secret (change it)",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  },
});

module.exports = sessionMiddleware;
