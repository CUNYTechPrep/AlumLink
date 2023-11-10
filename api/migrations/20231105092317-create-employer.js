'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Employer", {
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
          len: [3, 100],
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
          len: [6, 50],
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
          len: [3, 100],
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Employer");
  }
};




