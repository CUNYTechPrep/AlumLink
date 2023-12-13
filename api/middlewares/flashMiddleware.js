/**
 * Middleware function that adds flash messages to the response locals.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const flash = require("connect-flash");

const flashMiddleware = (req, res, next) => {
  
  flash()(req, res, () => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  });
};

module.exports = flashMiddleware;
