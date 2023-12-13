/**
 * Middleware that parses incoming JSON data.
 * @module jsonMiddleware
 * @function
 * @returns {Function} Express middleware function
 */
const express = require("express");

const jsonMiddleware = express.json();

module.exports = jsonMiddleware;
