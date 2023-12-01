'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contact_infos", null, {});
  }
};
