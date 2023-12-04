const express = require("express");
const router = express.Router();
const db = require("../models");
const { Employers } = db;

router.post("/", createEmployer);
async function createEmployer(req, res) {
  try {
    const employerInfo = req.body;
    const employer = await Employers.create( employerInfo );
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/", getEmployers);
async function getEmployers(req, res) {
  try {
    const employers = await Employers.findAll();
    res.json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/:id", getEmployer);
async function getEmployer(req, res) {
  try {
    const employer = await Employers.findByPk(req.params.id);
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.put("/:id", updateEmployer);
async function updateEmployer(req, res, next) {
  try {
    let employerInfo = req.body;
    
    const [updatedRowsCount, updatedEmployers] = await Employers.update(
      { ...employerInfo },
      { returning: true, where: { id: req.params.id } }
    );

    if (updatedRowsCount > 0) {
      // If at least one row was updated, return the updated employer
      res.json(updatedEmployers[0]); // Return the first updated employer
    } else {
      res.status(404).json({ message: "Employer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.delete('/:id', deleteEmployer);
async function deleteEmployer(req, res) {
  try {
    await Employers.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Employer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = router;
