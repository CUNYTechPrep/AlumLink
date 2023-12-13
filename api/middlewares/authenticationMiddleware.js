/**
 * Middleware for user authentication.
 * @module authenticationMiddleware
 */

const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Users } = require("../models");

/**
 * Compares a submitted password with a stored password hash.
 * @param {string} submittedPassword - The password submitted by the user.
 * @param {string} storedPasswordHash - The stored password hash.
 * @returns {boolean} - Returns true if the passwords match, false otherwise.
 */
function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/**
 * Passport Local Strategy for user authentication.
 * @param {object} options - Options for the LocalStrategy.
 * @param {string} options.usernameField - The name of the username field in the HTTP request body.
 * @param {string} options.passwordField - The name of the password field in the HTTP request body.
 * @param {function} verify - The verification callback function.
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: "RE_email",
      passwordField: "password",
    },
    (RE_email, password, done) => {
      Users.findOne({ where: { RE_email } })
        .then((user) => {
          if (!user) {
            console.log("\n\nFailed Login: user does not exist\n\n");
            return done(null, false, { message: "Failed Login" });
          }

          if (passwordsMatch(password, user.passwordHash) === false) {
            console.log("\n\nFailed Login: passwords did not match\n\n");
            return done(null, false, { message: "Failed Login" });
          }

          console.log("\n\nSuccessful Login\n\n");
          return done(null, user, { message: "Successfully Logged In!" });
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

/**
 * Serializes the user object into the session.
 * @param {object} user - The user object.
 * @param {function} done - The callback function.
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * Deserializes the user object from the session.
 * @param {number} id - The user ID.
 * @param {function} done - The callback function.
 */
passport.deserializeUser((id, done) => {
  Users.findByPk(id)
    .then((user) => {
      if (!user) {
        done(null, false);
        return;
      }

      done(null, user);
      return;
    })
    .catch((err) => done(err, null));
});

/**
 * Middleware to protect API routes that require a user to be logged in.
 * @returns {function} - The middleware function.
 */
passport.isAuthenticated = () => (req, res, next) => {
  console.log("User:", req.user); // Check if user exists in the request
  if (req.user) {
    return next();
  }
  res.sendStatus(401);
};

module.exports = passport;
