/**
 * Middleware for enabling Cross-Origin Resource Sharing (CORS).
 * @module corsMiddleware
 * @type {Function}
 */
const cors = require("cors");

const corsMiddleware = cors();

module.exports = corsMiddleware;
