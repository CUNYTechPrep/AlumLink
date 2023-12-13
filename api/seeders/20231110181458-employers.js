/**
 * @fileoverview Seeder file for populating the Employers table in the database.
 * @module seeders/20231110181458-employers
 */

"use strict";

/**
 * Populates the Employers table with initial data.
 * @param {Object} queryInterface - The Sequelize Query Interface.
 * @param {Object} Sequelize - The Sequelize library.
 * @returns {Promise<void>} A Promise that resolves when the data is inserted.
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employers = [
      {
        name: "Henderson Law Office",
        address: "123 Brooklyn Street",
        zip_code: "11215",
        city: "Brooklyn",
        state: "NY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "A1 Law Office",
        address: "123 Main Street",
        zip_code: "10002",
        city: "Queens",
        state: "NY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gonzalez Law Office",
        address: "456 Main Street",
        zip_code: "10003",
        city: "Manhattan",
        state: "NY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Armadio Law Office",
        address: "123 Main Street",
        zip_code: "10004",
        city: "Manhattan",
        state: "NY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Employers", employers, {});
  },

  /**
   * Deletes all data from the Employers table.
   * @param {Object} queryInterface - The Sequelize Query Interface.
   * @param {Object} Sequelize - The Sequelize library.
   * @returns {Promise<void>} A Promise that resolves when the data is deleted.
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Employers", null, {});
  },
};
