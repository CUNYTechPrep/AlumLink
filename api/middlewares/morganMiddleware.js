const morgan = require("morgan");

const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
const morganMiddleware = morgan(logFormat);

module.exports = morganMiddleware;
