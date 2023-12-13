/**
 * @fileoverview Defines the Employers model and its associations.
 * @module models/employer
 */

"use strict";

const { Model } = require("sequelize");

/**
 * Represents the Employers model.
 * @class
 * @extends Model
 */
module.exports = (sequelize, DataTypes) => {
  class Employers extends Model {
    /**
     * Defines the associations of the Employers model.
     * @static
     * @param {object} models - The models object.
     */
    static associate(models) {
      Employers.hasMany(models.Experiences, { foreignKey: "employer_id" });
    }
  }

  Employers.init(
    {
      /**
       * The name of the employer.
       * @type {string}
       */
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
      /**
       * The address of the employer.
       * @type {string}
       */
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
      /**
       * The zip code of the employer's address.
       * @type {string}
       */
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
      /**
       * The city of the employer's address.
       * @type {string}
       */
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
      /**
       * The state of the employer's address.
       * @type {string}
       */
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
      /**
       * The image path of the employer.
       * @type {string}
       */
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
