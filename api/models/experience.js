"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experiences extends Model {
    
    static associate(models) {
      Experiences.belongsTo(models.Users, { foreignKey: "user_id" });
      Experiences.belongsTo(models.Employers, { foreignKey: "employer_id" });
    }
  }

  Experiences.init(
    {
      position: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
      },
      description: DataTypes.STRING,
      start_date: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      end_date: DataTypes.DATE,
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Users",
          key: "id",
        },
      },
      employer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
        references: {
          model: "Employers",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Experiences",
      timestamps: true,
    }
  );
  return Experiences;
};
