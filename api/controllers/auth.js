/**
 * @file This file contains the authentication routes for signing up, logging in, and logging out users.
 * @module controllers/auth
 */

const router = require("express").Router();
const { Users, Contact_infos } = require("../models");
const passport = require("../middlewares/authenticationMiddleware");

/**
 * Route for signing up a new user with contact information.
 * @name POST /signup
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created user object.
 */
router.post("/signup", createUserWithContactInfo);
async function createUserWithContactInfo(req, res) {
  const userInfo = req.body;
  try {
    const newUser = await Users.create(userInfo);
    await Contact_infos.create({ user_id: newUser.id });

    req.login(newUser, () => res.status(201).json(newUser));
    req.flash("success", "Successfully signed up!");
  } catch (error) {
    req.flash("error", "Failed to sign up!");
    res.status(400).json({ message: error.message });
  }
};

/**
 * Route for logging in a user.
 * @name POST /login
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The authenticated user object.
 */
router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  req.flash("success", "Successfully logged in!");
  res.json(req.user);
});

/**
 * Route for logging out a user.
 * @name POST /logout
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The logout status message.
 */
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res
        .status(500)
        .json({ message: "Logout failed, please try again." });
    }
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
        return res
          .status(500)
          .json({ message: "Could not log out, please try again." });
      }
      res.clearCookie("connect.sid"); // Replace 'connect.sid' with your session cookie name, if different
      return res.status(200).json({ message: "Logout successful" });
    });
  });
});

module.exports = router;
