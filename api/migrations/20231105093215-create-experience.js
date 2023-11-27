'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Experience", {
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
          len: [3, 100],
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
          model: "User",
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
          model: "Employer",
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Experience");
  }
};