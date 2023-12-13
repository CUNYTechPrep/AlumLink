/**
 * Express router for handling experience-related routes.
 * @module controllers/experience
 */

const express = require("express");
const router = express.Router();
const db = require("../models");
const { Experiences } = db;

/**
 * Route for creating a new experience.
 * @name POST /
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created experience.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.post("/", createExperience);
async function createExperience(req, res) {
  try {
    let experiencerInfo = req.body;
    const experience = await Experiences.create(experiencerInfo);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Route for retrieving experiences by user ID.
 * @name GET /user_id/:user_id
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The experiences associated with the specified user ID.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.get("/user_id/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const experience = await Experiences.findAll({
      where: {
        user_id: user_id
      }
    });

    if (!experience) {
      return res.status(404).json({ message: 'Experience information not found for this user' });
    }

    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * Route for retrieving all experiences.
 * @name GET /
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of all experiences.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.get("/", getExperiences);
async function getExperiences(req, res) {
  try {
    const experiences = await Experiences.findAll();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Route for retrieving a specific experience by ID.
 * @name GET /:id
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The experience with the specified ID.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.get("/:id", getExperience);
async function getExperience(req, res) {
  try {
    const experience = await Experiences.findByPk(req.params.id);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Route for updating an experience by ID.
 * @name PUT /:id
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated experience.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.put("/:id", updateExperience);
async function updateExperience(req, res, next) {
  try {
    const experienceInfo = req.body;
    
    const [updatedRowsCount, updatedExperiences] = await Experiences.update(
      { ...experienceInfo },
      { returning: true, where: { id: req.params.id } }
    );

    if (updatedRowsCount > 0) {
      // If at least one row was updated, return the updated experience
      res.json(updatedExperiences[0]); // Return the first updated experience
    } else {
      res.status(404).json({ message: "Experience not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Route for deleting an experience by ID.
 * @name DELETE /:id
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @throws {Object} Error object with a message property if an error occurs.
 */
router.delete("/:id", deleteExperience);
async function deleteExperience(req, res) {
  try {
    await Experiences.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Deleted Experince" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = router;