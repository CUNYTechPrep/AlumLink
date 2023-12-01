"use strict";

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
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24241,
        RE_email: "mohamedelsayed.sde@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Emma",
        last_name: "Smith",
        gender: "Female",
        bio: "Passionate about upholding justice and defending individuals' rights within the criminal justice system.",
        class_year: 2024,
        practice_area: "Criminal Law",
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24242,
        RE_email: "emma.smith@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "James",
        last_name: "Johnson",
        gender: "Male",
        bio: "Compassionate in assisting families through challenging legal matters.",
        class_year: 2023,
        practice_area: "Family Law",
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24243,
        RE_email: "james.johnson@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Sophia",
        last_name: "Garcia",
        gender: "Female",
        bio: "Enthusiastic about protecting creative and innovative endeavors.",
        class_year: 2025,
        practice_area: "Family Law",
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24244,
        RE_email: "sophia.garcia@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "William",
        last_name: "Brown",
        gender: "Male",
        bio: "ExplDriven by a passion for environmental stewardship.",
        class_year: 2023,
        practice_area: "Environmental Law",
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24245,
        RE_email: "william.brown@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Olivia",
        last_name: "Martinez",
        gender: "Female",
        bio: "Committed to ensuring fair treatment and rights in the workplace.",
        class_year: 2024,
        practice_area: "Labor and Employment Law",
        image_path: null,
        cv_path: null,
        unique_identifier_number: 24246,
        RE_email: "olivia.martinez@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const insertedUsers = await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};