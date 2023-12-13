const session = require("express-session");
require("dotenv").config();

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
