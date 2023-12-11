const flash = require("connect-flash");

const flashMiddleware = (req, res, next) => {
  
  flash()(req, res, () => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  });
};

module.exports = flashMiddleware;
