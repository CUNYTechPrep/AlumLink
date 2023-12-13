/**
 * @fileoverview This file contains the Contact_infos model, which represents the contact information of a user.
 * @module models/contactInfo
 */

"use strict";

const { Model } = require("sequelize");

/**
 * Represents the Contact_infos model.
 * @class
 * @extends Model
 */
module.exports = (sequelize, DataTypes) => {
  class Contact_infos extends Model {
    /**
     * Establishes an association with the Users model.
     * @static
     * @param {object} models - The models object.
     */
    static associate(models) {
      Contact_infos.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }

  Contact_infos.init(
    {
      email: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("email");
        },
        set(value) {
          this.setDataValue("email", value);
        },
      },
      phone: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("phone");
        },
        set(value) {
          this.setDataValue("phone", value);
        },
      },
      dob: {
        type: DataTypes.DATE,
        get() {
          return this.getDataValue("dob");
        },
        set(value) {
          this.setDataValue("dob", value);
        },
      },
      address: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("address");
        },
        set(value) {
          this.setDataValue("address", value);
        },
      },
      zip_code: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("zip_code");
        },
        set(value) {
          this.setDataValue("zip_code", value);
        },
      },
      city: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("city");
        },
        set(value) {
          this.setDataValue("city", value);
        },
      },
      state: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("state");
        },
        set(value) {
          this.setDataValue("state", value);
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
    },
    {
      sequelize,
      modelName: "Contact_infos",
      timestamps: true,
    }
  );
  return Contact_infos;
};
