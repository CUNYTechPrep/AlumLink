"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employer.hasMany(models.Experience, { foreignKey: "employer_id" });
    }
  }
  Employer.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 150],
          notEmpty: true,
        },
      },
      zip_code: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [6, 50],
          notEmpty: true,
        },
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 100],
          notEmpty: true,
        },
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
      image_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Employer",
    }
  );
  return Employer;
};
