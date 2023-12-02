"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employers extends Model {
    
    static associate(models) {
      Employers.hasMany(models.Experiences, { foreignKey: "employer_id" });
    }
  }
  
  Employers.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
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
          len: [2, 100],
          notEmpty: true,
        },
      },
      image_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Employers",
      timestamps: true,
    }
  );
  return Employers;
};
