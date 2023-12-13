
'use strict';

/**
 * Represents a migration for creating the "Contact_infos" table.
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  /**
   * Executes the migration to create the "Contact_infos" table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contact_infos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      zip_code: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
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
   * Executes the migration to drop the "Contact_infos" table.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A promise that resolves when the migration is complete.
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contact_infos');
  }
};