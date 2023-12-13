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
        get() {
          return this.getDataValue("name");
        },
        set(value) {
          this.setDataValue("name", value);
        },
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [3, 150],
          notEmpty: true,
        },
        get() {
          return this.getDataValue("address");
        },
        set(value) {
          this.setDataValue("address", value);
        },
      },
      zip_code: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 50],
          notEmpty: true,
        },
        get() {
          return this.getDataValue("zip_code");
        },
        set(value) {
          this.setDataValue("zip_code", value);
        },
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 100],
          notEmpty: true,
        },
        get() {
          return this.getDataValue("city");
        },
        set(value) {
          this.setDataValue("city", value);
        },
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [2, 100],
          notEmpty: true,
        },
        get() {
          return this.getDataValue("state");
        },
        set(value) {
          this.setDataValue("state", value);
        },
      },
      image_path: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("image_path") || "default-image-path.jpg";
        },
        set(value) {
          this.setDataValue("image_path", value);
        },
      },
    },
    {
      sequelize,
      modelName: "Employers",
      timestamps: true,
    }
  );
  return Employers;
};
