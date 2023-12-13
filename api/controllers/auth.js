
const router = require("express").Router();
const { Users, Contact_infos } = require("../models");
const passport = require("../middlewares/authenticationMiddleware");

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

router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  req.flash("success", "Successfully logged in!");
  res.json(req.user);
});

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
