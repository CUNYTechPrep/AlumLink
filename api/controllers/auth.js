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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json(req.user);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
