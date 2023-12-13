/**
 * Seed file for inserting user data into the Users table.
 * @module seeders/20231110181418-users
 */

"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  /**
   * Inserts user data into the Users table.
   * @param {Object} queryInterface - The Sequelize Query Interface.
   * @param {Object} Sequelize - The Sequelize library.
   * @returns {Promise<void>} - A Promise that resolves when the data is inserted.
   */
  up: async (queryInterface, Sequelize) => {
    // User data to be inserted
    const users = [
      {
        first_name: "Mohamed",
        last_name: "Elsayed",
        gender: "Male",
        bio: "Dedicated to navigating the complexities of corporate structures and transactions, ensuring legal compliance.",
        class_year: 2023,
        practice_area: "Corporate Law",
        cv_path: null,
        unique_identifier_number: 24241,
        RE_email: "mohamedelsayed.sde@gmail.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ... other user objects
    ];

    // Insert user data into the Users table
    await queryInterface.bulkInsert("Users", users, {});
  },

  /**
   * Deletes all user data from the Users table.
   * @param {Object} queryInterface - The Sequelize Query Interface.
   * @param {Object} Sequelize - The Sequelize library.
   * @returns {Promise<void>} - A Promise that resolves when the data is deleted.
   */
  down: async (queryInterface, Sequelize) => {
    // Delete all user data from the Users table
    await queryInterface.bulkDelete("Users", null, {});
  },
};
