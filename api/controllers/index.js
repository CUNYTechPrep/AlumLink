const express = require("express");
const router = express.Router();
const contactInfoController = require("../controllers/contactInfo.js");
const employerController = require("./employer.js");
const experienceController = require("./experience.js");
const userController = require("./user.js");

router.use("/contactInfo", contactInfoController);
router.use("/employer", employerController);
router.use("/experience", experienceController);
router.use("/user", userController);
module.exports = router;