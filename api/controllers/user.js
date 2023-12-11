const express = require("express");
const router = express.Router();
const db = require("../models");
const { Users, Contact_infos } = db;

router.post("/", createUserWithContactInfo);
async function createUserWithContactInfo(req, res) {
  const userInfo = req.body;
  try {
    const newUser = await Users.create(userInfo);
    await Contact_infos.create({ user_id: newUser.id });

    res.status(201).json(newUser);
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

router.get("/profile/:id", async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id, {
      include: [
        { model: Contact_infos, as: "contactInfo" },
        {
          model: Experiences,
          as: "experiences",
          include: [{ model: Employers, as: "employer" }],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const formattedUserData = {
      ...user.get(), 
      contactInfo: user.contactInfo.get(),
      experiences: user.experiences.map((exp) => ({
        ...exp.get(),
        employer: exp.employer ? exp.employer.get() : null,
      })),
    };

    res.json(formattedUserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
async function updateUser(req, res) {
  const { id } = req.params;
  const userInfo = req.body;

  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password) {
      await user.setPassword(password); // Hash new password
    }
    const updatedUser = await user.update(userInfo);
    res.json(updatedUser);
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