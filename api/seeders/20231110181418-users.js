"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        first_name: "Mohamed",
        last_name: "Elsayed",
        gender: "Male",
        bio: "Dedicated to navigating the complexities of corporate structures and transactions, ensuring legal compliance.",
        class_year: 2023,
        practice_area: "Corporate Law",
        cv_path: null,
        unique_identifier_number: 24241,
        RE_email: "mohamedelsayed.sde@gmail.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "John",
        last_name: "Doe",
        gender: "Male",
        bio: "Experienced attorney with expertise in litigation and dispute resolution.",
        class_year: 2022,
        practice_area: "Litigation",
        cv_path: null,
        unique_identifier_number: 12345,
        RE_email: "johndoe@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        gender: "Female",
        bio: "Passionate about environmental law and sustainability.",
        class_year: 2024,
        practice_area: "Environmental Law",
        cv_path: null,
        unique_identifier_number: 54321,
        RE_email: "janesmith@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "David",
        last_name: "Brown",
        gender: "Male",
        bio: "Focused on real estate law and property transactions.",
        class_year: 2022,
        practice_area: "Real Estate Law",
        cv_path: null,
        unique_identifier_number: 98765,
        RE_email: "davidbrown@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Emily",
        last_name: "Johnson",
        gender: "Female",
        bio: "Advocating for social justice through legal avenues.",
        class_year: 2023,
        practice_area: "Social Justice Law",
        cv_path: null,
        unique_identifier_number: 13579,
        RE_email: "emilyjohnson@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Robert",
        last_name: "Davis",
        gender: "Male",
        bio: "Specializing in intellectual property law and patent applications.",
        class_year: 2025,
        practice_area: "Intellectual Property Law",
        cv_path: null,
        unique_identifier_number: 24680,
        RE_email: "robertdavis@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
