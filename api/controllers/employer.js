/**
 * Express router for employer-related routes.
 * @module employerRouter
 */

const express = require("express");
const router = express.Router();
const db = require("../models");
const { Employers } = db;

/**
 * Route for creating a new employer.
 * @name POST /api/employer
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - The created employer object
 * @throws {Object} - Error object with a message property
 */
router.post("/", createEmployer);
async function createEmployer(req, res) {
  try {
    const employerInfo = req.body;
    const employer = await Employers.create(employerInfo);
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for retrieving all employers.
 * @name GET /api/employer
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Array} - An array of employer objects
 * @throws {Object} - Error object with a message property
 */
router.get("/", getEmployers);
async function getEmployers(req, res) {
  try {
    const employers = await Employers.findAll();
    res.json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for retrieving a specific employer by ID.
 * @name GET /api/employer/:id
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - The employer object with the specified ID
 * @throws {Object} - Error object with a message property
 */
router.get("/:id", getEmployer);
async function getEmployer(req, res) {
  try {
    const employer = await Employers.findByPk(req.params.id);
    res.json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for updating a specific employer by ID.
 * @name PUT /api/employer/:id
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - The updated employer object
 * @throws {Object} - Error object with a message property
 */
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
}

/**
 * Route for deleting a specific employer by ID.
 * @name DELETE /api/employer/:id
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - A success message indicating the employer was deleted
 * @throws {Object} - Error object with a message property
 */
router.delete("/:id", deleteEmployer);
async function deleteEmployer(req, res) {
  try {
    await Employers.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Employer deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = router;
