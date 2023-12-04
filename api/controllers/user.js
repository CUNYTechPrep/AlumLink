const express = require("express");
const router = express.Router();
const db = require("../models");
const { Users, Contact_infos } = db;

router.post("/", createUserWithContactInfo);
async function createUserWithContactInfo(req, res) {
  const userInfo = req.body;
  try {
    const createdUser = await Users.create( userInfo );
    await Contact_infos.create({ user_id: createdUser.id });
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

router.get("/", getUsers);
async function getUsers(req, res) {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get('/:id', getUser);
async function getUser(req, res) {
  try {
    const user = await Users.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.put('/:id', updateUser);
async function updateUser(req, res, next) {
  try {
    const info = req.body;
    const [updatedRowsCount, updatedUser] = await Users.update(
      { ...info },
      { returning: true, where: { id: req.params.id } }
    );
   if ( updatedRowsCount > 0 ) {
     res.json(updatedUser[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.delete('/:id', deleteUser);
async function deleteUser(req, res) {
  try {
    await Contact_infos.destroy({
      where: { user_id: req.params.id },
    });
    await Users.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Deleted user' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = router;