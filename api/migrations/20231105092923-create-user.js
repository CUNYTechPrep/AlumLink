/**
 * @file Migration script for creating the "Users" table in the database.
 * @module migrations/20231105092923-create-user
 */

"use strict";

module.exports = {
  /**
   * Executes the migration to create the "Users" table.
   * @param {Object} queryInterface - The query interface object provided by Sequelize.
   * @param {Object} Sequelize - The Sequelize object.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true, // assuming gender can be optional
      },
      bio: {
        type: Sequelize.TEXT, // Changed to TEXT for longer bios
        allowNull: true,
      },
      class_year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      practice_area: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pp_img_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cover_img_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cv_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unique_identifier_number: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      RE_email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  /**
   * Executes the migration to drop the "Users" table.
   * @param {Object} queryInterface - The query interface object provided by Sequelize.
   * @param {Object} Sequelize - The Sequelize object.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
