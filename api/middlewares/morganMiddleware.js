/**
 * Middleware that logs HTTP requests using the morgan library.
 * @module morganMiddleware
 * @type {Function}
 */
const morgan = require("morgan");

const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
const morganMiddleware = morgan(logFormat);

module.exports = morganMiddleware;
