'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        validate: {
          len: [3, 100],
        },
      },
      last_name: {
        type: Sequelize.STRING,
        validate: {
          len: [3, 100],
        },
      },
      gender: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      class_year: Sequelize.INTEGER,
      practice_area: { type: Sequelize.STRING },
      image_path: { type: Sequelize.STRING },
      cv_path: { type: Sequelize.STRING },
      unique_identifier_number: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      RE_email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  }
};