/**
 * @fileoverview Seeder file for creating contact information records in the database.
 * @module seeders/20231110181516-contact-infos
 * @requires sequelize-cli
 */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * Executes the migration to create contact information records.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A Promise that resolves when the migration is complete.
   */
  async up (queryInterface, Sequelize) {
    const contactInfos = [];
  
    // Loop through insertedUsers to create associated ContactInfo
    for (let i = 0; i < 6; i++) {
      // Create a ContactInfo associated with the user
      contactInfos.push({
        user_id: i + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Contact_infos", contactInfos, {});
  },

  /**
   * Executes the migration to delete all contact information records.
   * @param {import('sequelize').QueryInterface} queryInterface - The Sequelize Query Interface.
   * @param {import('sequelize').Sequelize} Sequelize - The Sequelize instance.
   * @returns {Promise<void>} A Promise that resolves when the migration is complete.
   */
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contact_infos", null, {});
  }
};
