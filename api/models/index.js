/**
 * @fileoverview This file exports the Sequelize database connection and models.
 * @module models/index
 */

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

/**
 * Creates a Sequelize database connection based on the configuration settings.
 * If a specific environment variable is provided, it will be used for the connection.
 * Otherwise, the default configuration values will be used.
 */
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

/**
 * Reads all model files in the current directory and imports them as Sequelize models.
 * Each model is associated with the Sequelize instance and added to the `db` object.
 */
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

/**
 * Associates all models in the `db` object if they have an `associate` method.
 */
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/**
 * Exports the Sequelize database connection and models.
 * @type {Object}
 */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
