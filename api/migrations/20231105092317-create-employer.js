'use strict';

/**
 * Represents a migration for creating the "Employers" table.
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  /**
   * Executes the migration to create the "Employers" table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Employers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [3, 150],
          notEmpty: true,
        },
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [5, 50],
          notEmpty: true,
        },
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 100],
          notEmpty: true,
        },
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
      },
      image_path: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  /**
   * Executes the migration to drop the "Employers" table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Employers");
  }
};




