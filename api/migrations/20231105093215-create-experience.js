'use strict';

/**
 * Represents a migration for creating the Experiences table.
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  /**
   * Executes the migration to create the Experiences table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A Promise that resolves when the migration is complete.
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Experiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      position: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
      },
      description: Sequelize.STRING,
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          notEmpty: true,
        },
      },
      end_date: Sequelize.DATE,
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Users",
          key: "id",
        },
      },
      employer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Employers",
          key: "id",
        },
      },
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
   * Executes the migration to drop the Experiences table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A Promise that resolves when the migration is complete.
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Experiences");
  }
};