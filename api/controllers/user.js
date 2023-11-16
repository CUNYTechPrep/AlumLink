const express = require("express");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");

async function createUser(req, res) {
  try {
    const newUser = await user.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      // ...other fields
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}