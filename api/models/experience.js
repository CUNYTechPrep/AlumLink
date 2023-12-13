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
        get() {
          return this.getDataValue("position");
        },
        set(value) {
          this.setDataValue("position", value);
        },
      },
      description: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("description");
        },
        set(value) {
          this.setDataValue("description", value);
        },
      },
      start_date: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
        get() {
          return this.getDataValue("start_date");
        },
        set(value) {
          this.setDataValue("start_date", value);
        },
      },
      end_date: {
        type: DataTypes.DATE,
        get() {
          return this.getDataValue("end_date");
        },
        set(value) {
          this.setDataValue("end_date", value);
        },
      },
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
        get() {
          return this.getDataValue("user_id");
        },
        set(value) {
          this.setDataValue("user_id", value);
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
        get() {
          return this.getDataValue("employer_id");
        },
        set(value) {
          this.setDataValue("employer_id", value);
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
