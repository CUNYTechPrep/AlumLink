/**
 * Express router for handling API routes.
 * @module controllers/index
 */
const express = require("express");
const router = express.Router();
const contactInfoController = require("./contactInfo.js");
const employerController = require("./employer.js");
const experienceController = require("./experience.js");
const userController = require("./user.js");
const authController = require("./auth.js");

router.use("/contactInfo", contactInfoController);
router.use("/employer", employerController);
router.use("/experience", experienceController);
router.use("/user", userController);
router.use("/auth", authController);

module.exports = router;