/**
 * Express router for handling contact information related routes.
 * @module controllers/contactInfo
 */

const express = require("express");
const router = express.Router();
const db = require("../models");
const { Contact_infos } = db;
const passport = require("../middlewares/authenticationMiddleware");

/**
 * Route for creating a new contact information.
 * @name POST /
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The created contact information.
 * @throws {Object} - Error object with a message property.
 */
router.post("/", createContactInfo);
async function createContactInfo(req, res) {
  try {
    const contactInfo = req.body;
    Contact_infos.create(contactInfo);
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for retrieving all contact information.
 * @name GET /
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Array} - Array of contact information objects.
 * @throws {Object} - Error object with a message property.
 */
router.get("/", getContactInfos);
async function getContactInfos(req, res) {
  try {
    const contactInfos = await Contact_infos.findAll();
    res.json(contactInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for retrieving a specific contact information by ID.
 * @name GET /:id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The contact information object.
 * @throws {Object} - Error object with a message property.
 */
router.get("/:id", getContactInfo);
async function getContactInfo(req, res) {
  try {
    const contactInfo = await Contact_infos.findByPk(req.params.id);
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for retrieving contact information by user ID.
 * @name GET /user_id/:user_id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The contact information object.
 * @throws {Object} - Error object with a message property.
 */
router.get("/user_id/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const contactInfo = await Contact_infos.findOne({
      where: {
        user_id: user_id,
      },
    });

    if (!contactInfo) {
      return res
        .status(404)
        .json({ message: "Contact information not found for this user" });
    }

    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * Route for updating a specific contact information by ID.
 * @name PUT /:id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The updated contact information object.
 * @throws {Object} - Error object with a message property.
 */
router.put("/:id", updateContactInfo);
async function updateContactInfo(req, res, next) {
  try {
    let contactInfo = req.body;

    const [updatedRowsCount, updatedContactInfos] = await Contact_infos.update(
      { ...contactInfo },
      { returning: true, where: { id: req.params.id } }
    );

    if (updatedRowsCount > 0) {
      // If at least one row was updated, return the updated contactInfo
      res.json(updatedContactInfos[0]); // Return the first updated contactInfo
    } else {
      res.status(404).json({ message: "ContactInfo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Route for deleting a specific contact information by ID.
 * @name DELETE /:id
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Success message.
 * @throws {Object} - Error object with a message property.
 */
router.delete("/:id", deleteContactInfo);
async function deleteContactInfo(req, res) {
  try {
    const contactInfo = await Contact_infos.findByPk(req.params.id);
    if (contactInfo) {
      await contactInfo.destroy();
      res.json({ message: "ContactInfo deleted" });
    } else {
      res.status(404).json({ message: "ContactInfo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = router;