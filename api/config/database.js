const db = require("../models");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // Uncomment the line below to sync the database models
    await db.sequelize.sync({ force: false }); // Be careful with the 'force' option
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectToDatabase;