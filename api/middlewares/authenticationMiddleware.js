const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Users } = require("../models");

function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

/*
  The following code runs at login time.

  The usernameField and passwordField options refer to the HTTP requests
  body parameter names. I've set this to look for an `email` parameter,
  but you may prefer to use a `username` parameter instead of an email.

  BEST PRACTICE: don't state why login failed to the user.
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

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

// Use this protect api routes that require a user to be logged in.
passport.isAuthenticated = () => (req, res, next) => {
  console.log("User:", req.user); // Check if user exists in the request
  if (req.user) {
    return next();
  }
  res.sendStatus(401);
};

module.exports = passport;
